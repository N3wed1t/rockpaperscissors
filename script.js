function getComputerChoice(){
    const data = ['Rock', 'Paper', 'Scissors'];
    const result = data[Math.floor(Math.random() * 3)];
    console.log(result);
}