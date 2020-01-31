class Cookie {
    constructor(name,id) {
        this.name=name;
        this.id=id;
    }

    pull = (source) => {
        let name = this.name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            document.getElementById(this.id).src=source + c.substring(name.length, c.length);
        }
        }
        return "";
        }
    
    write = () => {
        let response=document.getElementById(this.id).value;
        let cookievalue = response + ";";
        document.cookie = this.name + '=' + cookievalue +"; path/";
        alert(cookievalue)
        
        }
}

