
    var pronoun = ['the','our'];
    var adj = ['great', 'big' ];
    var noun = ['jogger','racoon'];
    var add = ['.com','.cl'];

    let combinaciones = " ";
    for (let uno = 0; uno < 2; uno++){
        for (let dos = 0; dos < 2; dos++){
            for (let tres = 0; tres < 2; tres++){
                for (let cuatro = 0; cuatro < 2; cuatro++){
                    console.log(pronoun[uno] + adj[dos] + noun[tres] + add[cuatro]);
                }                   
            }
        }
    }
    
