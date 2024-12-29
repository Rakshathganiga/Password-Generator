const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+[]{}\|/?-=<>";
    let password = "";
    const lengthOfPassword = 8;
    for(let i=0; i<lengthOfPassword; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));

    }
    passwordBox.value = password;

};

button.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
    const passwordCopy = passwordBox.value.trim();
    if(!passwordCopy){
        alert("No Password to Copy! Please Generate Password First");
        return;
    }
    navigator.clipboard.writeText(passwordCopy).then(() => {
        alert("Password Copied to Clipboard");
    });
});