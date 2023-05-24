// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const spells = [
    {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyReqired: 5.1
    },
    {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyReqired: 2.99
    },
    {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyReqired: 12.2
    },
    {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired: 100
    },
    {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyReqired: 2921.5
    }
]


const evilBook = {
    title: "Evil Book",
    spells: [
    ]
}

const goodBook = {
    title: "Good Book",
    spells: [
        
    ]
}

spells.forEach(spell => {
    spell.IsEvil ? evilBook.spells.push(spell) : goodBook.spells.push(spell)
}
)

const displayBook = (book) => {
    console.log(book.title)
    book.spells.forEach(spell => {
        console.log(`${spell.Name}`)
    })
}

displayBook(goodBook);
displayBook(evilBook);





