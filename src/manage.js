document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("backButton").addEventListener("click", () => {
        goBack();
    });
    retrieveModels();
});

function goBack() {
    window.history.back();
}

// retrieve models
async function retrieveModels() {
    const response = await fetch('https://business-entity-recognition-trial.cfapps.us10.hana.ondemand.com/api/v1/models', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vMGYyYjkyZDJ0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJkZWZhdWx0LWp3dC1rZXktOTk1Mzc2OTI1IiwidHlwIjoiSldUIn0.eyJqdGkiOiI0MzY5OWQ2ODY5MmI0NzNjOTdmMWEzMWIyMDFkNTUxZCIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiI4MDdmMDYzMi02ODNjLTQ4ZTItYTZlYi0yNzViYmUzMGU5NjEiLCJ6ZG4iOiIwZjJiOTJkMnRyaWFsIiwic2VydmljZWluc3RhbmNlaWQiOiJkMWI1NDQ2OC1mOWEzLTRlMTktYWY0NC0xY2Y5MGM1MGRiYWIifSwic3ViIjoic2ItZDFiNTQ0NjgtZjlhMy00ZTE5LWFmNDQtMWNmOTBjNTBkYmFiIWI5ODQxMnxuZXItdHJpYWwhYjI1MzI0IiwiYXV0aG9yaXRpZXMiOlsidWFhLnJlc291cmNlIiwibmVyLXRyaWFsIWIyNTMyNC5kZWZhdWx0Il0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsIm5lci10cmlhbCFiMjUzMjQuZGVmYXVsdCJdLCJjbGllbnRfaWQiOiJzYi1kMWI1NDQ2OC1mOWEzLTRlMTktYWY0NC0xY2Y5MGM1MGRiYWIhYjk4NDEyfG5lci10cmlhbCFiMjUzMjQiLCJjaWQiOiJzYi1kMWI1NDQ2OC1mOWEzLTRlMTktYWY0NC0xY2Y5MGM1MGRiYWIhYjk4NDEyfG5lci10cmlhbCFiMjUzMjQiLCJhenAiOiJzYi1kMWI1NDQ2OC1mOWEzLTRlMTktYWY0NC0xY2Y5MGM1MGRiYWIhYjk4NDEyfG5lci10cmlhbCFiMjUzMjQiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjdiNDRjMDUwIiwiaWF0IjoxNjY0MzEzNjE2LCJleHAiOjE2NjQzNTY4MTYsImlzcyI6Imh0dHBzOi8vMGYyYjkyZDJ0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiODA3ZjA2MzItNjgzYy00OGUyLWE2ZWItMjc1YmJlMzBlOTYxIiwiYXVkIjpbIm5lci10cmlhbCFiMjUzMjQiLCJzYi1kMWI1NDQ2OC1mOWEzLTRlMTktYWY0NC0xY2Y5MGM1MGRiYWIhYjk4NDEyfG5lci10cmlhbCFiMjUzMjQiLCJ1YWEiXX0.HyosOkOLprkw2FXZ3PvuZBgj_s8LhAGTmDswkEI1h8ne6qQu5StOQ4ZhR-50JJ5ae5hElUvzHeaadahnj_lOFIURSO9gluahdmrw50BC_jtSRkV2N8oj1WxVHZgHV8ofrBHoA4sIKbdf2tMMDFFVarW7in6_GfnSxoDDYjFv9jQctOXoO0LuZ79wjfdS5cV2ZCVZIW5cscetAaTNGkd8u4sAeaEsLRUqcZv9EKBa4-uVyOPbPiXGAQvGGDiXwApVTQNwEGLPpOcn_RjFVcCKRQLew_IXLNuoEhzragMeDbXLxTUrFefB0DvCm7zzo6TAAU5ZMEcKTiqv1rzbAZ_26w",
            "accept": "application/json"
        }
    });
    const myJson = await response.json();
    // do something with myJson
    console.log(myJson);
}