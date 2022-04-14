let quiz={
    question2 :{
        "Q":"Que retourne le constructeur ?",
        "answers":{
            "a1":["entre 0 et n arguments ",0],
            "a2":["échec ou succès",0],
            "a3":["un pointeur",0],
            "a4":["rien",1]
        },
        'discription':"Le constracteur retourne rien",
    
    },
    question3 :{
        "Q":"Une interface peut-elle être instanciée ?",
        "answers":{
            "a1":["oui si elle n'est pas 'private'",0],
            "a2":["non",1],
            "a3":["oui, toutes",0],
            "a4":["oui si elle est 'public'",0]
        },
        'discription':"non, l'interface ne pas instancier",
    },
    question4 :{
        "Q":"Une variable de classe, commune à toutes les instances d'une classe doit être déclarée ?",
        "answers":{
            "a1":["static",1],
            "a2":["public",0],
            "a3":["private",0],
            "a4":["global",0]
        },
        'discription':"satic , variable de class ",
    },
    question5 :{
        "Q":"Comment permettre à une méthode de gérer un nombre de paramètres variable en python ?",
        "answers":{
            "a1":["définir différents accesseurs",0],
            "a2":["utiliser des paramettres optionels",1],
            "a3":["la surcharger",0],
            "a4":["la déclarer en void",0]
        },
        'discription':"utiliser des paramettres optionels",
    },
    question6 :{
        "Q":"Dans quels langages une classe peut profiter de l'héritage multiple (hériter de plusieurs classes en même temps) ?",
        "answers":{
            "a1":["JAVA",0],
            "a2":["C++",0],
            "a3":["Python",1],
            "a4":["PHP",0]
        },
        'discription':"Python",

    },
    question7 :{
        "Q":"Comment-appelle t-on le fait d'utiliser une 'classe' pour créer un 'objet'?",
        "answers":{
            "a1":["instanciation",1],
            "a2":["construction",0],
            "a3":["surcharge",0],
            "a4":["implémentation",0]
        },
        'discription':"instanciation",
    }


}

// PAGE INDEX.HTML
// 
let result=document.getElementById('score');
// card body
let cardBody=document.getElementById('card-body');
// inputs
let input1=document.getElementById('answer1');
let input2=document.getElementById('answer2');
let input3=document.getElementById('answer3');
let input4=document.getElementById('answer4');
// labels
let label1=document.getElementById('label1');
let label2=document.getElementById('label2');
let label3=document.getElementById('label3');
let label4=document.getElementById('label4');

// button
let valider=document.getElementById('valider');
let nextone=document.getElementById('nextone');
// header
let header=document.getElementById('card-header');
// Object Size
let size = Object.keys(quiz).length;
let counter=1;
 // initial quiz
let initQuiz={
    question1 :{
        "Q":"Quelles méthodes et variables peuvent être utilisées dans une classe héritée ?",
        "answers":{
            "a1":["private ou protected",0],
            "a2":["public ou protected",1],
            "a3":["toutes",0],
            "a4":["private ou public",0]
        },
        'discription':"public ou protected",
        
    },
}

// labels
header.textContent=initQuiz[`question${counter}`]['Q'];
label1.textContent=initQuiz[`question${counter}`]["answers"]["a1"][0];
label2.textContent=initQuiz[`question${counter}`]["answers"]["a2"][0];
label3.textContent=initQuiz[`question${counter}`]["answers"]["a3"][0];
label4.textContent=initQuiz[`question${counter}`]["answers"]["a4"][0];    
// values
input1.value=initQuiz[`question${counter}`]["answers"]["a1"][1];
input2.value=initQuiz[`question${counter}`]["answers"]["a2"][1];
input3.value=initQuiz[`question${counter}`]["answers"]["a3"][1];
input4.value=initQuiz[`question${counter}`]["answers"]["a4"][1];
// add event listener
let score=0;
nextone.addEventListener('click',event=>{
    if (event.target) {
        counter++;
        span.textContent=counter;
        if (counter<= size+1) {
            // labels
            header.textContent=quiz[`question${counter}`]['Q'];
            label1.textContent=quiz[`question${counter}`]["answers"]["a1"][0];
            label2.textContent=quiz[`question${counter}`]["answers"]["a2"][0];
            label3.textContent=quiz[`question${counter}`]["answers"]["a3"][0];
            label4.textContent=quiz[`question${counter}`]["answers"]["a4"][0];    
            // values
            input1.setAttribute('value',`${quiz[`question${counter}`]["answers"]["a1"][1]}`);
            input2.setAttribute('value',`${quiz[`question${counter}`]["answers"]["a2"][1]}`);
            input3.setAttribute('value',`${quiz[`question${counter}`]["answers"]["a3"][1]}`);
            input4.setAttribute('value',`${quiz[`question${counter}`]["answers"]["a4"][1]}`); 
        }
        if (counter===size+1){
            valider.remove();
            nextone.remove();
            // link
            let link=document.createElement("a");
            link.setAttribute("href","#score");
            let resultBtn=document.createElement("button");
            resultBtn.setAttribute('id','result');
            resultBtn.setAttribute("class","float-end btn btn-success");
            resultBtn.setAttribute("type","button");
            resultBtn.textContent="Result";
            // append child
            link.appendChild(resultBtn)
            cardBody.appendChild(link);
            // show results 
            let result_final=document.getElementById('result');
            result_final.addEventListener('click',event=>{
                if (event.target) {
                    for (const form of document.forms) {
                        for (const ele of form.elements) {
                            if (ele.checked) {
                                score+=parseInt(ele.value);
                                document.getElementById('card-span').textContent=`
                                    ${score} / ${size}
                                `;
                                if (score>=5) {
                                    result.classList.add('border-success');
                                }else{
                                    result.classList.add('border-danger');
                                }
                                //
                                let div=document.createElement('div'); 
                                div.setAttribute('class','card');
                                div.classList.add('m-3');
                                div.classList.add('p-3');
                                let h5=document.createElement("h5");
                                h5.textContent=`Q1: ${initQuiz[`question1`]['Q']}`;
                                let p=document.createElement("p");
                                p.textContent=`${initQuiz[`question1`]['discription']}`;
                                div.appendChild(h5);
                                div.appendChild(p);
                                document.body.appendChild(div)
                                for (let i =2;i<=size+1;i++) {
                                    let div=document.createElement('div'); 
                                    div.setAttribute('class','card');
                                    div.classList.add('m-3');
                                    div.classList.add('p-3');
                                    let h5=document.createElement("h5");
                                    h5.textContent=`Q${i} : ${quiz[`question${i}`]['Q']}`;
                                    let p=document.createElement("p");
                                    p.textContent=`${quiz[`question${i}`]['discription']}`;
                                    div.appendChild(h5);
                                    div.appendChild(p);
                                    document.body.appendChild(div);
                                }
                            }
                        }
                    }
                    result.style.visibility='inherit';
                    
                }
            });
        }
        
    }

});

valider.addEventListener('click',event=>{
    if (event.target) {
        for (const form of document.forms) {
            for (const ele of form.elements) {
                if (ele.checked) {
                    score+=parseInt(ele.value)  
                }
            }
        }
    }
})

