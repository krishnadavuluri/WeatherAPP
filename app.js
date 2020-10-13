
window.addEventListener("load",()=>
{
    var place=document.getElementById("city-name");
    var temperature=document.getElementById("temp");
    var report=document.getElementById("report");
    var image=document.getElementById("image");
    console.log("hello");
    let long;
    let lati;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>{
            long=position.coords.longitude;
            lati=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";
            const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=ece0eae859a1344d8cf858fabecfce33`;
            fetch(api).then(response=>
                {
                    return response.json();
                }).then(data=>{
                    console.log(data);
                    let {name}= data;
                    let {temp}=data.main;
                    let {id,description}=data.weather[0];
                    place.innerHTML=" "+name;
                    temperature.innerHTML=Math.floor(temp-273);
                    report.innerHTML=description;
                    if(id<250)
                    {
                          image.src='img/thunderstroms.png';
                    }
                    else if(id<350)
                    {
                        image.scr='img/drizzle.jpg';
                    }
                    else if(id<550)
                    {
                        image.src='img/rain.gif';
                    }
                    else if(id<650)
                    {
                        image.src='img/snow.png';
                    }
                    else if(id<800)
                    {
                        image.src='img/OverCast.png';
                    }
                    else if(id==800)
                    {
                        image.src='img/Sunny.png';
                    }
                    else if(id>800)
                    {
                        image.src='img/cloudy.png';
                    }
                })
        })
    }
})
function GetReport()
{
    var cityName=document.getElementById('getPlaceName').value;
    console.log(cityName);
    var PlaceName=document.getElementById('search-name');
    var unit=document.getElementById('search-unit');
    var Image=document.getElementById('search-image');
    var Temperature=document.getElementById('search-temp');
    var Description=document.getElementById('search-report');
    const proxy="https://cors-anywhere.herokuapp.com/";
    var api=`${proxy}api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ece0eae859a1344d8cf858fabecfce33`;
    fetch(api).then((response)=>
    {
        return response.json();
    }).then(data=>{
        var {name}=data;
        var {temp}=data.main;
        var {id,description}=data.weather[0];
        console.log(name,temp,id,description);
        PlaceName.innerHTML=name;
        PlaceName.style.visibility="visible";
        Temperature.innerHTML=Math.floor(temp-273);
        //second change.
        unit.style.visibility="visible";
        Temperature.style.visibility="visible";
        //this is new commit.
        Description.innerHTML=description;
        Description.style.visibility="visible";
        Image.style.visibility="visible";
        if(id<250)
        {
            Image.src='img/thunderstroms.png';
        }
        else if(id<350)
        {
            Image.scr='img/drizzle.jpg';
        }
        else if(id<550)
        {
            Image.src='img/rain.gif';
        }
        else if(id<650)
        {
            Image.src='img/snow.png';
        }
        else if(id<800)
        {
            Image.src='img/OverCast.png';
        }
        else if(id==800)
        {
            Image.src='img/Sunny.png';
        }
        else if(id>800)
        {
            Image.src='img/cloudy.png';
        }           
    }).catch(error=>{
        document.getElementById('search-error').style.visibility="visible";
        setTimeout(()=>
        {
            document.getElementById('search-error').style.visibility="hidden"; 
        },3000)
        
    })
    
}