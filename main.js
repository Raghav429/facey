function setup()
{
web = createCanvas(300,300);
web.center();   
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9fQ02A2_O/model.json",modelLoaded)
}
function modelLoaded()
{
console.log("Model Loaded!");
}

function draw()
{
image(video, 0, 0, 300, 300);
classifier.classify(video,gotResult);
}
function gotResult(error,result)
{
if(error)
{
console.error(error);
}
else
{
    console.log(result);
    document.getElementById("object_answer").innerHTML = result[0].label;
    document.getElementById("accuracy_answer").innerHTML = result[0].confidence.toFixed(3);
}

}