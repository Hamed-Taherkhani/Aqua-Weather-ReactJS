import sun from "./../Resources/Icons/sun.png";
import moon from "./../Resources/Icons/moon.png";
import thunder from "./../Resources/Icons/thunder.png";
import drizzle from "./../Resources/Icons/drizzle.png";
import lightRain from "./../Resources/Icons/drizzle.png";
import heavyRain from "./../Resources/Icons/heavy rain.png";
import snow from "./../Resources/Icons/snow.png";
import atmosphere from "./../Resources/Icons/atmosphere.png";
import cloudyDay from "./../Resources/Icons/cloudy day.png";
import cloudyNight from "./../Resources/Icons/cloudy night.png";

const icon = new Map();

// Id : 800
icon.set("sun", sun);

// Id : 800
icon.set("moon", moon);

// Id : 200
icon.set("thunderstorm", thunder);

// Id : 300
icon.set("drizzle", drizzle);

// Id : 500 - 501
icon.set("light-rain", lightRain);

// Id : 502 - 531
icon.set("heavy-rain", heavyRain);

// Id : 600
icon.set("snow", snow);

// Id : 700
icon.set("atmosphere", atmosphere);

// Id : 801 - 804
icon.set("cloudy-day", cloudyDay);
icon.set("cloudy-night", cloudyNight);

function getIconById(id, icon) {
  if (id === 800) {
    if (icon.includes("d")) return getIconByName("sun");
    else if (icon.includes("n")) return getIconByName("moon");
  }
  if (id > 800 && id < 900) {
    if (icon.includes("d")) return getIconByName("cloudy-day");
    else if (icon.includes("n")) return getIconByName("cloudy-night");
  }
  if (id > 700 && id < 800) return getIconByName("atmosphere");
  if (id >= 600 && id < 700) return getIconByName("snow");
  if (id === 500 || id === 501) return getIconByName("light-rain");
  if (id > 501 && id < 600) return getIconByName("heavy-rain");
  if (id >= 300 && id < 400) return getIconByName("drizzle");
  if (id >= 200 && id < 300) return getIconByName("thunderstorm");
}

function getIconByName(name) {
  return icon.get(name);
}

export default getIconById;
