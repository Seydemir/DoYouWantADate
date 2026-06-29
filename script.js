let ArrowX = 75
let goRight = true;

setInterval(() =>
{
    document.getElementById("Arrow").style.left = ArrowX + "%";
    if(goRight)
    {
        if(ArrowX >= 80)
        {
            goRight = false;
        }
        else
        {
            ArrowX += 1;
        }
        
        
    }
    else if(goRight == false)
    {
        if(ArrowX <= 65)
        {
            goRight = true;
        }
        else
        {
            ArrowX -= 1;
        }
    }

}, 20)

function Accept()
{
    alert("CİDDİ MİSİN?")
    alert("OHA YES")
}