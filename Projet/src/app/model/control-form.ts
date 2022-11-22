export class ControlForm {
    public static controlTel(tel: string): boolean {
        const telRegex = new RegExp('^[0-9]{8,15}$');
        return telRegex.test(tel);
    }

    public static controlMail(mail: string): boolean {
        const mailRegex = new RegExp('^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$');
        return mailRegex.test(mail);
    }
    /*
    public static controlPassword(password: string): boolean {
        const passwordRegex = new RegExp('^[a-zA-Z0-9._#$=-]{6,}$');
        let valid = passwordRegex.test(password)
        if()
        return ;
    }
    */
}
