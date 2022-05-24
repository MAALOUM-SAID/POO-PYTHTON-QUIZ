fetch('./qcm.json')
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            // PAGE INDEX.HTML
            // 
            let result = document.getElementById('score');
            // card body
            let cardBody = document.getElementById('card-body');
            // inputs
            let input1 = document.getElementById('answer1');
            let input2 = document.getElementById('answer2');
            let input3 = document.getElementById('answer3');
            let input4 = document.getElementById('answer4');
            // labels
            let label1 = document.getElementById('label1');
            let label2 = document.getElementById('label2');
            let label3 = document.getElementById('label3');
            let label4 = document.getElementById('label4');

            // button
            let valider = document.getElementById('valider');
            let nextone = document.getElementById('nextone');
            // header
            let header = document.getElementById('card-header');
            // Object Size
            let size = Object.keys(data).length;
            let counter = 1;
            // max score
            document.getElementById('max-score').textContent=size+1;
            let validClicked=0;
            // initial quiz
            let initQuiz = {
                question1: {
                    "Q": "Quelles méthodes et variables peuvent être utilisées dans une classe héritée ?",
                    "answers": {
                        "a1": ["private ou protected", 0],
                        "a2": ["public ou protected", 1],
                        "a3": ["toutes", 0],
                        "a4": ["private ou public", 0]
                    },
                    'discription': "public ou protected",
                    "answer":"public ou protected"
                },
            }

            // labels
            header.textContent = initQuiz[`question${counter}`]['Q'];
            label1.textContent = initQuiz[`question${counter}`]["answers"]["a1"][0];
            label2.textContent = initQuiz[`question${counter}`]["answers"]["a2"][0];
            label3.textContent = initQuiz[`question${counter}`]["answers"]["a3"][0];
            label4.textContent = initQuiz[`question${counter}`]["answers"]["a4"][0];
            // values
            input1.value = initQuiz[`question${counter}`]["answers"]["a1"][1];
            input2.value = initQuiz[`question${counter}`]["answers"]["a2"][1];
            input3.value = initQuiz[`question${counter}`]["answers"]["a3"][1];
            input4.value = initQuiz[`question${counter}`]["answers"]["a4"][1];
            document.getElementById('Q-descr').textContent=initQuiz[`question${counter}`]['discription'];
            document.getElementById('Q-answer').textContent="Solution: "+initQuiz[`question${counter}`]['answer'];
            // add event listener
            let score = 0;
            nextone.addEventListener('click', event => {
                if (event.target) {
                    counter++;
                    validClicked=0;
                    span.textContent = counter;
                    document.getElementById('alert').style.display='none';
                    document.getElementById('disp-div').style.opacity="1";
                    if (counter <= size + 1) {
                        // labels
                        header.textContent = data[`question${counter}`]['Q'];
                        label1.textContent = data[`question${counter}`]["answers"]["a1"][0];
                        label2.textContent = data[`question${counter}`]["answers"]["a2"][0];
                        label3.textContent = data[`question${counter}`]["answers"]["a3"][0];
                        label4.textContent = data[`question${counter}`]["answers"]["a4"][0];
                        // values
                        input1.setAttribute('value', `${data[`question${counter}`]["answers"]["a1"][1]}`);
                        input2.setAttribute('value', `${data[`question${counter}`]["answers"]["a2"][1]}`);
                        input3.setAttribute('value', `${data[`question${counter}`]["answers"]["a3"][1]}`);
                        input4.setAttribute('value', `${data[`question${counter}`]["answers"]["a4"][1]}`);
                        document.getElementById('Q-descr').textContent=data[`question${counter}`]['discription'];
                        document.getElementById('Q-answer').textContent="Solution: "+data[`question${counter}`]['answer'];

                        

                    }
                    if (counter === size + 1) {
                        valider.remove();
                        nextone.remove();
                        // link
                        let link = document.createElement("a");
                        link.setAttribute("href", "#score");
                        let resultBtn = document.createElement("button");
                        resultBtn.setAttribute('id', 'result');
                        resultBtn.setAttribute("class", "float-end btn btn-success");
                        resultBtn.setAttribute("type", "button");
                        resultBtn.textContent = "Result";
                        // append child
                        link.appendChild(resultBtn)
                        cardBody.appendChild(link);
                        // show results 
                        let result_final = document.getElementById('result');
                        result_final.addEventListener('click', event => {
                            if (event.target) {
                                document.getElementById('disp-div').style
                                    .display = "none";
                                for (const form of document.forms) {
                                    for (const ele of form.elements) {
                                        if (ele.checked) {
                                            score += parseInt(ele.value);
                                            document.getElementById('card-span').textContent = `
                                    ${score} / ${size+1}
                                `;
                                            if (score >= 5) {
                                                result.classList.add('border-success');
                                            } else {
                                                result.classList.add('border-danger');
                                            }
                                        }
                                    }
                                }
                                result.style.display = 'flex';

                            }
                        });
                    }

                }
                

            });

            valider.addEventListener('click', event => {
                if (event.target) {
                    for (const form of document.forms) {
                        for (const ele of form.elements) {
                            if (ele.checked && validClicked!=1) {
                                score += parseInt(ele.value);
                                validClicked=1;
                                let alert=document.getElementById('alert');
                                alert.style.display='block';
                                document.getElementById('disp-div').style.opacity="0.5";
                                if (parseInt(ele.value)===1) {
                                    alert.classList.add('alert-success');
                                    alert.classList.remove('alert-danger');
                                    document.getElementById('status').innerHTML=`<svg style="color:green;margin-right:10px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                  </svg><span>Vrai</span>`;
                                }
                                else if(parseInt(ele.value)===0) {
                                    alert.classList.remove('alert-success');
                                    alert.classList.add('alert-danger');
                                    document.getElementById('status').innerHTML=`<svg style="color:red;margin-right:10px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                  </svg><span>Faux</span>`;
                                }
                            }
                        }
                    }
                }
            })


        }
);