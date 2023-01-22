var inputArea;
var outputArea;
var hasOutput = null;

const inputID = 'json-input';
const outputID = 'json-output';

function fitTextArea(id){
    var textArea = document.getElementById(id);
    if(textArea.scrollHeight>400){
        console.log(textArea.scrollHeight);
        textArea.style.height = textArea.scrollHeight+3+"px";
    }
    textArea.setSelectionRange(0, 0)
}


function invalidJSON(){
    console.log("json invalid")
    inputArea.style.border = "2px solid red"
}

function validJSON(output){
    outputArea.style.border = "2px solid green"
    outputArea.value = output
    hasOutput = true
}

function startValidation(){
    fitTextArea(inputID)
    var input = inputArea.value;
    var output = ""
    
    if(input.length>0){
        try {
            output = JSON.stringify(JSON.parse(input),null,4)
        } catch (error) {
            invalidJSON()
        }
        if(output.length>0){
            validJSON(output)
            fitTextArea(outputID)
        }
    }else{
        inputArea.style.border = "1px solid black"
    }
}

function initialize(){
    inputArea = document.getElementById(inputID);
    outputArea = document.getElementById(outputID);
    startValidation();
}


function copy(){
    borderPop()
    navigator.clipboard.writeText(outputArea.value)
}

function borderPop(){
    if(hasOutput){
        console.log("In styling")
        outputArea.style.border = "2px solid #4287f5"
        setTimeout(() => {
            outputArea.style.border = "2px solid green"
        }, 200);
    }
}