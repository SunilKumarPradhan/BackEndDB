import inquirer from 'inquirer';
import fs from "fs";
import qr from 'qr-image';

//prompt method from inquirer package to get input of url from user.
inquirer

.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Type your url:',
    },
  ])

  
  .then((answers) => {
    const url = answers.url; //The value of name which is 'url'

    fs.writeFile("user-url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    })

    var qr_png = qr.image(url, { type: 'png' }); 
    qr_png.pipe(fs.createWriteStream('qr.png'));
  })

  .catch(error => {
    console.error('Error:', error);
  });