export default function externalComponent(url) {
    const name = url.split("/").reverse()[2];
    console.log("The name after splitting is: ", name )
    if (window[name]) return window[name];
    else {
        const script = document.createElement("script");
        script.async = true;
        script.src = url;
        document.body.appendChild(script);
        return window[name];
    }
  }
  git 