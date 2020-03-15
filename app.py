from flask import Flask, request, jsonify
import requests
import base64
import pytesseract
from PIL import Image
import re

app = Flask(__name__)

@app.route('/process-request', methods=['POST', 'GET'])
def process_request():
    img_str = ""
    if request.method == 'POST':
        print("hello")
        img_str = request.json["image"]
        img_data = base64.b64decode(img_str)
        img_jpg = 'img.jpg'
        with open(img_jpg, 'wb') as f:
            f.write(img_data)
        text = pytesseract.image_to_string(Image.open('img.jpg'))
        text = re.sub("\n",r" ",text)
        text = text.split(',')
        samplefile = open ('sampleFile.txt', 'r')
        temp = samplefile.read().splitlines()
        mylist = []
        for line in temp:
            reg = re.compile(line)
            for item in text:
                m = re.search(reg, item.lower())
                if m:
                    mylist.append(m.group().capitalize())
        
        for m in mylist:
            if m == "Almonds":
                print("almonds")
                response = requests.get("http://128.189.211.78:8080/emissions?category=Nuts/Seeds&product="+ m)
                print(response.text)
                return jsonify(response.text)

    return "Error!" 

if __name__ == "__main__":
    app.run(debug=True, port=5000)

    #ngrok http 5000