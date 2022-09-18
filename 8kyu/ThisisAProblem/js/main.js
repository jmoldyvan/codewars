function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

let n = new NameMe('jon', 'doe')
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe