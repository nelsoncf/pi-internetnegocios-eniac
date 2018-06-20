"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'nelson@gmail.com': new User('nelson@gmail.com', 'Nelson', '1234'),
    'mariana@gmail.com': new User('nelson@gmail.com', 'Mariana', '1234')
};
