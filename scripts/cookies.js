class Cookie {
    constructor(name,id) {
        this.name=name;
        this.id=id;
    }

    pull = () => {
        var name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                document.getElementById(id).value= c.substring(name.length, c.length);
            alert('responsepulled')
            }
        }
    }
    
    write = () => {
        let response=document.getElementById(this.id).value;
        let cookievalue = response + ";";
        document.cookie = this.name + '=' + cookievalue +"; path/";
        alert(cookievalue)
        
        }
    }
