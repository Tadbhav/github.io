

(function(core){

    class User {
        constructor(displayName = "", emailAddress = "", userName = "", password = "") {
            this._displayName = displayName;
            this._emailAddress = emailAddress;
            this._userName = userName;
            this._password = password;
        }

        get displayName() {
            return this._displayName;
        }

        get emailAddress() {
            return this._emailAddress;
        }

        get userName() {
            return this._userName;
        }

        set displayName(displayName) {
            this._displayName = displayName;
        }

        setEmailAddress(emailAddress) {
            this._emailAddress = emailAddress;
        }

        setUserName(userName) {
            this._username = userName;
        }


        toString() {
            return `Display Name: ${this.displayName}\nEmail Address: ${this.emailAddress}\nUser Name: ${this.userName}`;
        }

        serialize() {
            if (this._displayName !== "" && this.emailAddress !== "" && this.userName !== "") {
                return `${this.displayName}, ${this.userName}, ${this.emailAddress}`;
            }
            console.error("[ERROR]Serialization failed! One or more user properties are missing. ");
            return null;
        }

        deserialize(data) {
            let propertyArray = data.split(",");
            this._displayName = propertyArray[0];
            this._emailAddress = propertyArray[1];
            this._username = propertyArray[2];
        }

        toJSON() {
            return {
                DisplayName : this._displayName,
                EmailAddress : this._emailAddress,
                UserName : this._userName,
                Password : this._password,
            }
        }

        fromJSON(json) {
            this._displayName = data.DisplayName;
            this._emailAddress = data.EmailAddress;
            this._username = data.UserName;
            this._password = data.Password;
        }


    }
    core.User = User;
})(core||(core={}));