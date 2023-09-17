import { ValidatorFn,ValidationErrors, AbstractControl} from "@angular/forms";

export function nameValidator(): ValidatorFn {
    return (control: AbstractControl ): ValidationErrors | null =>  //control je ustvari atribut koji je upisan u to neko input polje, control.value je ocitana vrednost 
    {
        const nameisCorrect=    //boolean vrednost                       //.split(' ), to znaci da hocemo da podelimo ceo input na reci, ako postoje vise od 2( length>1) onda je to validno
        control.value.split(' ').filter((np:string ) => np!=='').length>1;  // ako je Petar Mancic, to ce da vrati true 
        return nameisCorrect? null: { incorrectName: true}   // ako je true, vrati null sto znaci da je validno ako nije onda vrati incorrectName:true, tu moze da se dodaju jos neki drugi
                                                            //incorrectName: true, mnaxLength:true, , ako je npr broj slova veci od 50 itd...
    }   
}