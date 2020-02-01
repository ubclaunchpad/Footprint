import flask
import urllib.request, json

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    cleanmetrics_url = "https://www.cleanmetrics.com/carbonscopedata_api/api/process_lci/getgroups"
    with urllib.request.urlopen(cleanmetrics_url) as url:
        data = json.loads(url.read().decode())
    return json.dumps(data)
app.run()