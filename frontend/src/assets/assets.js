/*faltan imagenes de los libros que estaban repetidos y agregaste nuevos, agrega más imagenes por libro, se muestra la imagen principal y a la izquierda las otras imagenes*/
import book_img1_1 from './book_img1_1.jpg'
import book_img1_2 from './book_img1_2.jpg'
import book_img1_3 from './book_img1_3.jpg'
import book_img1_4 from './book_img1_4.jpg'
import book_img2 from './book_img2.jpg'
import book_img3 from './book_img3.jpg'
import book_img4 from './book_img4.jpg'
import book_img5 from './book_img5.jpg'
import book_img6 from './book_img6.jpg'
import book_img7 from './book_img7.jpg'
import book_img8 from './book_img8.jpg'
import book_img9 from './book_img9.jpg'
import book_img10 from './book_img10.jpg'
import book_img11 from './book_img11.jpg'
import book_img12 from './book_img12.jpg'
import book_img13 from './book_img13.jpg'
import book_img17 from './book_img17.jpg'
import book_img18 from './book_img18.jpg'
import book_img19 from './book_img19.jpg'
import book_img20 from './book_img20.jpg'
import book_img21 from './book_img21.jpg'
import book_img22 from './book_img22.jpg'
import book_img23 from './book_img23.jpg'
import book_img24 from './book_img24.jpg'
import book_img25 from './book_img25.jpg'
import book_img26 from './book_img26.jpg'
import book_img27 from './book_img27.jpg'
import book_img28 from './book_img28.jpg'
import book_img29 from './book_img29.jpg'
import book_img30 from './book_img30.jpg'
import book_img31 from './book_img31.jpg'
import book_img32 from './book_img32.jpg'
import book_img34 from './book_img34.jpg'
import book_img35 from './book_img35.jpg'
import book_img36 from './book_img36.jpg'
import book_img37 from './book_img37.jpg'
import book_img38 from './book_img38.jpg'
import book_img42 from './book_img42.jpg'
import book_img43 from './book_img43.jpg'
import book_img47 from './book_img47.jpg'
import book_img48 from './book_img48.jpg'
import book_img49 from './book_img49.jpg'
import book_img50 from './book_img50.jpg'
import book_img51 from './book_img51.jpg'


import logo1 from './logo1.png'
import logo2 from './logo2.png'
import hero_img from './hero_img.png'
import hero_img1 from './hero_img1.jpg'
import hero_img2 from './hero_img2.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo1,
    logo2,
    hero_img,
    hero_img1,
    hero_img2,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const categories = [
    "Novel",
   "Children",
   "Fiction",
   "Romance",
   "Poetry",
   "Fantasy", 
   "Horror", 
   "Philosophy",
   "Science Fiction", 
   "Young Adult", 
   "Thriller"
]

export const languages = [
    "English", "Spanish", "French", "Portuguese"
]

/* filtro: por categorias, language y bestseller */

export const products = [
    {
        _id: "b0001",
        name: "One Hundred Years of Solitude",
        description: "A masterpiece by Gabriel García Márquez that tells the story of the Buendía family.",
        price: 15,
        image: [book_img1_1, book_img1_2, book_img1_3, book_img1_4],
        category: "Novel",
        genre: "Magical Realism",
        author: "Gabriel García Márquez",
        publisher: "Harper & Row",
        date: -1095379200000, // 1967
        language: ["English", "Spanish", "French"],
        ISBN: "978-0060883287",
        bestseller: false,
    },
    {
        _id: "b0002",
        name: "1984",
        description: "A dystopian classic exploring themes of surveillance and social control.",
        price: 12,
        image: [book_img2], 
        category: "Novel",
        genre: "Dystopian, Political Fiction",
        author: "George Orwell",
        publisher: "Secker & Warburg",
        date: -694310400000, // 1949
        language: ["English", "Spanish", "French", "Portuguese"],
        ISBN: "978-0451524935",
        bestseller: false,
    },
    {
        _id: "b0003",
        name: "The Little Prince",
        description: "A philosophical tale that has captivated readers of all ages.",
        price: 8,
        image: [book_img3],
        category: "Children",
        genre: "Fantasy, Philosophy",
        author: "Antoine de Saint-Exupéry",
        publisher: "Reynal & Hitchcock",
        date: -851990400000, // 1943
        language: ["English", "French", "Spanish"],
        ISBN: "978-0156012195",
        bestseller: true,
    },
    {
        _id: "b0004",
        name: "The Alchemist",
        description: "An inspiring novel about pursuing personal dreams.",
        price: 10,
        image: [book_img4],
        category: "Fiction",
        genre: "Adventure, Fantasy",
        author: "Paulo Coelho",
        publisher: "HarperCollins",
        date: 561427200000, // 1988
        language: ["English", "Portuguese", "Spanish"],
        ISBN: "978-0061122415",
        bestseller: false,
    },
    {
        _id: "b0005",
        name: "Pride and Prejudice",
        description: "A romantic classic exploring themes of love, pride, and misunderstandings.",
        price: 14,
        image: [book_img5],
        category: "Romance",
        genre: "Classic, Historical Fiction",
        author: "Jane Austen",
        publisher: "T. Egerton",
        date: -5364576000000, // 1813
        language: ["English"],
        ISBN: "978-0141439518",
        bestseller: true,
    },
    {
        _id: "b0006",
        name: "The Divine Comedy",
        description: "An epic poem narrating a journey through Hell, Purgatory, and Paradise.",
        price: 18,
        image: [book_img6],
        category: "Poetry",
        genre: "Epic, Allegory",
        author: "Dante Alighieri",
        publisher: "Niccolò di Lorenzo",
        date: -1871971200000, // 1320
        language: ["Italian", "English"],
        ISBN: "978-0142437223",
        bestseller: false,
    },
    {
        _id: "b0007",
        name: "To Kill a Mockingbird",
        description: "A powerful story about racial injustice and moral growth.",
        price: 12,
        image: [book_img7],
        category: "Novel",
        genre: "Classic, Coming-of-Age",
        author: "Harper Lee",
        publisher: "J.B. Lippincott & Co.",
        date: -315619200000, // 1960
        language: ["English"],
        ISBN: "978-0061120084",
        bestseller: true,
    },
    {
        _id: "b0008",
        name: "The Great Gatsby",
        description: "A tale of love, ambition, and the American Dream.",
        price: 17,
        image: [book_img8],
        category: "Novel",
        genre: "Classic, Tragedy",
        author: "F. Scott Fitzgerald",
        publisher: "Scribner",
        date: -1373673600000, // 1925
        language: ["English", "Spanish", "French", "Portuguese"],
        ISBN: "978-0743273565",
        bestseller: true,
    },
    {
        _id: "b0009",
        name: "Moby Dick",
        description: "A thrilling tale of obsession and revenge at sea.",
        price: 13,
        image: [book_img9],
        category: "Novel",
        genre: "Adventure",
        author: "Herman Melville",
        publisher: "Harper & Brothers",
        date: -3318124800000,
        language: ["English"],
        ISBN: "978-1503280786",
        bestseller: true
    },
    {
        _id: "b0010",
        name: "The Catcher in the Rye",
        description: "A coming-of-age story of a rebellious teenager in New York City.",
        price: 10,
        image: [book_img10],
        category: "Novel",
        genre: "Young Adult",
        author: "J.D. Salinger",
        publisher: "Little, Brown and Company",
        date: -662688000000,
        language: ["English"],
        ISBN: "978-0316769488",
        bestseller: false
    },
    {
        _id: "b0011",
        name: "War and Peace",
        description: "An epic novel about Russian society during the Napoleonic Wars.",
        price: 20,
        image: [book_img11],
        category: "Novel",
        genre: "Historical Fiction",
        author: "Leo Tolstoy",
        publisher: "The Russian Messenger",
        date: -3020928000000,
        language: ["Russian", "English"],
        ISBN: "978-0199232765",
        bestseller: true
    },
    {
        _id: "b0012",
        name: "Crime and Punishment",
        description: "A psychological novel exploring guilt and redemption.",
        price: 16,
        image: [book_img12],
        category: "Novel",
        genre: "Psychological Fiction",
        author: "Fyodor Dostoevsky",
        publisher: "The Russian Messenger",
        date: -2950857600000,
        language: ["Russian", "English"],
        ISBN: "978-0486415871",
        bestseller: false
    },
    {
        _id: "b0013",
        name: "The Hobbit",
        description: "A fantasy adventure featuring Bilbo Baggins and his journey to recover a treasure.",
        price: 12,
        image: [book_img13],
        category: "Novel",
        genre: "Fantasy",
        author: "J.R.R. Tolkien",
        publisher: "George Allen & Unwin",
        date: -1021084800000,
        language: ["English"],
        ISBN: "978-0345339683",
        bestseller: true
    },
    {
        _id: "b0014",
        name: "The Lord of the Rings",
        description: "An epic fantasy trilogy about the battle for Middle-earth.",
        price: 21,
        image: ["book_img14"],
        category: "Novel",
        genre: "Fantasy",
        author: "J.R.R. Tolkien",
        publisher: "George Allen & Unwin",
        date: -728524800000,
        language: ["English", "Spanish", "French", "Portuguese"],
        ISBN: "978-0544003415",
        bestseller: true
    },
    {
        _id: "b0015",
        name: "Harry Potter and the Sorcerer's Stone",
        description: "The first book in the Harry Potter series, introducing the wizarding world.",
        price: 12,
        image: ["book_img15"],
        category: "Novel",
        genre: "Fantasy",
        author: "J.K. Rowling",
        publisher: "Bloomsbury",
        date: 867715200000,
        language: ["English"],
        ISBN: "978-0590353427",
        bestseller: true
    },
    {
        _id: "b0016",
        name: "Jane Eyre",
        description: "A Gothic romance exploring the life of an orphan and her search for love and belonging.",
        price: 14,
        image: ["book_img16"],
        category: "Novel",
        genre: "Gothic Romance",
        author: "Charlotte Brontë",
        publisher: "Smith, Elder & Co.",
        date: -4009843200000,
        language: ["English", "Spanish"],
        ISBN: "978-0141441146",
        bestseller: false
    },
    {
        _id: "b0017",
        name: "Wuthering Heights",
        description: "A tale of passion and revenge set in the moors of England.",
        price: 15,
        image: [book_img17],
        category: "Novel",
        genre: "Gothic Romance",
        author: "Emily Brontë",
        publisher: "Thomas Cautley Newby",
        date: -3965712000000,
        language: ["English", "French"],
        ISBN: "978-0141439556", 
        bestseller: false
    },
    {
        _id: "b0018",
        name: "Brave New World",
        description: "A dystopian novel that explores a future shaped by technology and societal control.",
        price: 13,
        image: ["book_img18"],
        category: "Novel",
        genre: "Dystopian",
        author: "Aldous Huxley",
        publisher: "Chatto & Windus",
        date: -1199232000000,
        language: ["English"],
        ISBN: "978-0060850524",
        bestseller: true
    },
    {
        _id: "b0019",
        name: "Fahrenheit 451",
        description: "A dystopian classic about censorship and the power of books.",
        price: 11,
        image: ["book_img19"],
        category: "Novel",
        genre: "Dystopian",
        author: "Ray Bradbury",
        publisher: "Ballantine Books",
        date: -531187200000,
        language: ["English"],
        ISBN: "978-1451673319",
        bestseller: true
    },
    {
        _id: "b0020",
        name: "The Road",
        description: "A post-apocalyptic tale of survival and the bond between a father and son.",
        price: 12,
        image: ["book_img20"],
        category: "Novel",
        genre: "Post-Apocalyptic",
        author: "Cormac McCarthy",
        publisher: "Alfred A. Knopf",
        date: 1167350400000,
        language: ["English"],
        ISBN: "978-0307387899",
        bestseller: true
    },
    {
        _id: "b0021",
        name: "Dracula",
        description: "The classic Gothic novel that introduced Count Dracula to the world.",
        price: 13,
        image: ["book_img21"],
        category: "Novel",
        genre: "Horror",
        author: "Bram Stoker",
        publisher: "Archibald Constable and Company",
        date: -2682374400000,
        language: ["English"],
        ISBN: "978-0141439846",
        bestseller: true
    },
    {
        _id: "b0022",
        name: "Frankenstein",
        description: "A Gothic tale about the consequences of creating life.",
        price: 10,
        image: ["book_img22"],
        category: "Novel",
        genre: "Horror",
        author: "Mary Shelley",
        publisher: "Lackington, Hughes, Harding, Mavor & Jones",
        date: -4989600000000,
        language: ["English"],
        ISBN: "978-0486282114",
        bestseller: false
    },
    {
        _id: "b0023",
        name: "It",
        description: "A terrifying tale of childhood fears and a shape-shifting entity.",
        price: 18,
        image: ["book_img23"],
        category: "Novel",
        genre: "Horror",
        author: "Stephen King",
        publisher: "Viking Press",
        date: 525830400000,
        language: ["English"],
        ISBN: "978-1501142971",
        bestseller: false
    },
    {
        _id: "b0024",
        name: "The Shining",
        description: "A horror classic about a haunted hotel and the unraveling of a family.",
        price: 16,
        image: [book_img24],
        category: "Horror",
        genre: "Psychological Horror",
        author: "Stephen King",
        publisher: "Doubleday",
        date: 1612137600000,
        language: ["English"],
        ISBN: "9780385121675",
        bestseller: false
    },
    {
        _id: "b0025",
        name: "The Picture of Dorian Gray",
        description: "A philosophical novel about vanity and moral corruption.",
        price: 12,
        image: [book_img25],
        category: "Philosophy",
        author: "Oscar Wilde",
        genre: "Gothic Fiction",
        publisher: "Ward, Lock & Co.",
        date: 1606780800000,
        language: ["English"],
        ISBN: "9780141439570",
        bestseller: true,
    },
    {
        _id: "b0026",
        name: "Meditations",
        description: "A collection of personal writings by Marcus Aurelius on Stoic philosophy.",
        price: 9,
        image: [book_img26],
        category: "Philosophy",
        genre: "Stoicism",
        author: "Marcus Aurelius",
        publisher: "Penguin Classics",
        date: 1617235200000,
        language: ["Greek", "English"],
        ISBN: "9780140449334",
        bestseller: false,
    },
    {
        _id: "b0027",
        name: "The Art of War",
        description: "A timeless manual on strategy and leadership.",
        price: 8,
        image: [book_img27],
        category: "Philosophy",
        genre: "Military Strategy",
        author: "Sun Tzu",
        publisher: "Various",
        date: 1569888000000,
        language: ["Chinese", "English"],
        ISBN: "9781590302255",
        bestseller: true,
    },
    {
        _id: "b0028",
        name: "The Republic",
        description: "Plato's philosophical masterpiece exploring justice and society.",
        price: 14,
        image: [book_img28],
        category: "Philosophy",
        genre: "Political Philosophy",
        author: "Plato",
        publisher: "Penguin Classics",
        date: 1559347200000,
        language: ["Greek", "English"],
        ISBN: "9780140455113",
        bestseller: false,
    },
    {
        _id: "b0029",
        name: "The Iliad",
        description: "Homer's epic poem about the Trojan War and its heroes.",
        price: 13,
        image: [book_img29],
        category: "Poetry",
        genre: "Epic Poetry",
        author: "Homer",
        publisher: "Penguin Classics",
        date: 1601510400000,
        language: ["Greek", "English"],
        ISBN: "9780140275360",
        bestseller: true,
    },
    {
        _id: "b0030",
        name: "Leaves of Grass",
        description: "A landmark collection of American poetry by Walt Whitman.",
        price: 10,
        image: [book_img30],
        category: "Poetry",
        genre: "American Poetry",
        author: "Walt Whitman",
        publisher: "Various",
        date: 1577836800000,
        language: ["English"],
        ISBN: "9780486454458",
        bestseller: true,
    },
    {
        _id: "b0031",
        name: "Dune",
        description: "A science fiction epic about politics, religion, and ecology on a desert planet.",
        price: 18,
        image: [book_img31],
        category: "Science Fiction",
        genre: "Space Opera",
        author: "Frank Herbert",
        publisher: "Chilton Books",
        date: 1590969600000,
        language: ["English", "Portuguese", "Spanish"],
        ISBN: "978-0441013593",
        bestseller: true,
    },
    {
        _id: "b0032",
        name: "The Chronicles of Narnia",
        description: "A beloved fantasy series for readers of all ages.",
        price: 30,
        image: [book_img32],
        category: "Novel",
        genre: "Fantasy",
        author: "C.S. Lewis",
        publisher: "Geoffrey Bles",
        date: 1609459200000,
        language: ["English"],
        ISBN: "978-0066238500",
        bestseller: true,
    },
    {
        _id: "b0033",
        name: "Fourth Wing",
        description: "A story about teenage alienation and rebellion.",
        price: 12,
        image: ["book_img33"],
        category: "Young Adult",
        genre: "Fantasy Romance",
        author: "Rebecca Yarros",
        publisher: "Little, Brown and Company",
        date: 1588291200000,
        language: ["English", "French"],
        ISBN: "978-1649374042",
        bestseller: true,
    },
    {
        _id: "b0034",
        name: "Anne of Green Gables",
        description: "A heartwarming tale of an orphan finding her place in the world.",
        price: 10,
        image: [book_img34],
        category: "Children",
        genre: "Coming-of-Age",
        author: "L.M. Montgomery",
        publisher: "L.C. Page & Co.",
        date: 1585699200000,
        language: ["English"],
        ISBN: "978-0553213133",
        bestseller: true,
    },
    {
        _id: "b0035",
        name: "The Secret Garden",
        description: "A story of transformation and growth in a magical garden.",
        price: 9,
        image: [book_img35],
        category: "Children",
        genre: "Classic Literature",
        author: "Frances Hodgson Burnett",
        publisher: "Frederick A. Stokes",
        date: 1583020800000,
        language: ["English"],
        ISBN: "978-0142437056",
        bestseller: false
    },
    {
        _id: "b0036",
        name: "The Giver",
        description: "A dystopian tale of a young boy discovering the truth about his society.",
        price: 11,
        image: [book_img36],
        category: "Young Adult",
        genre: "Dystopian",
        author: "Lois Lowry",
        publisher: "Houghton Mifflin",
        date: 1598918400000,
        language: ["English", "Spanish"],
        ISBN: "978-0544336261",
        bestseller: true
    },
    {
        _id: "b0037",
        name: "The Maze Runner",
        description: "A gripping tale of survival and mystery in a deadly maze.",
        price: 12,
        image: [book_img37],
        category: "Young Adult",
        genre: "Dystopian",
        author: "James Dashner",
        publisher: "Delacorte Press",
        date: 1609459200000,
        language: ["English"],
        ISBN: "978-0385737951",
        bestseller: false
    },
    {
        _id: "b0038",
        name: "The Adventures of Huckleberry Finn",
        description: "A classic American novel about freedom and friendship.",
        price: 13,
        image: [book_img38],
        category: "Novel",
        genre: "Classic Literature, Adventure",
        author: "Mark Twain",
        publisher: "Charles L. Webster And Company",
        date: 1577836800000,
        language: ["English"],
        ISBN: "978-0486280615",
        bestseller: true
    },
    {
        _id: "b0039",
        name: "The Seven Husbands of Evelyn Hugo",
        description: "A historical fiction novel about fame, love, and secrets.",
        price: 14,
        image: ["book_img39"],
        category: "Young Adult",
        genre: "Drama",
        author: "Taylor Jenkins Reid",
        publisher: "Atria Books",
        date: 1580515200000,
        language: ["English", "Spanish", "French"],
        ISBN: "978-1501161933",
        bestseller: true
    },
    {
        _id: "b0040",
        name: "Legend",
        description: "A chilling dystopian novel about surveillance and control.",
        price: 15,
        image: ["book_img40"],
        category: "Science Fiction",
        genre: "Dystopian",
        author: "Marie Lu",
        publisher: "G.P. Putnam's Sons",
        date: 1575158400000,
        language: ["English"],
        ISBN: "978-0399256752",
        bestseller: true
    },
    {
        _id: "b0041",
        name: "The House in the Cerulean Sea",
        description: "A heartwarming fantasy about acceptance and belonging.",
        price: 14,
        image: ["book_img41"],
        category: "Novel",
        genre: "Magical Realism",
        author: "TJ Klune",
        publisher: "Tor Books",
        date: 1606780800000,
        language: ["English"],
        ISBN: "978-1250217318",
        bestseller: true
    },
    {
        _id: "b0042",
        name: "Little Women",
        description: "A coming-of-age story of four sisters during the American Civil War.",
        price: 13,
        image: [book_img42],
        category: "Novel",
        genre: "Coming-of-Age",
        author: "Louisa May Alcott",
        publisher: "Roberts Brothers",
        date: 1580515200000,
        language: ["English"],
        ISBN: "978-0147514011",
        bestseller: false
    },
    {
        _id: "b0043",
        name: "The Count of Monte Cristo",
        description: "A gripping tale of betrayal and revenge.",
        price: 16,
        image: [book_img43],
        category: "Novel",
        genre: "Historical Fiction",
        author: "Alexandre Dumas",
        publisher: "Penguin Classics",
        date: 1617235200000,
        language: ["French"],
        ISBN: "978-0140449266",
        bestseller: true
    },
    {
        _id: "b0044",
        name: "A Court of Thorns and Roses",
        description: "A fantasy novel with romance and political intrigue.",
        price: 15,
        image: ["book_img44"],
        category: "Fantasy",
        genre: "Romance",
        author: "Sarah J. Maas",
        publisher: "Bloomsbury Publishing",
        date: 1430438400000,
        language: ["English", "Spanish"],
        ISBN: "9781619635180",
        bestseller: true
    },
    {
        _id: "b0045",
        name: "If We Were Villains",
        description: "A dark academia thriller exploring obsession and Shakespeare.",
        price: 11,
        image: ["book_img45"],
        category: "Thriller",
        genre: "Dark Academia",
        author: "M.L. Rio",
        publisher: "Flatiron Books",
        date: 1491523200000,
        language: ["English"],
        ISBN: "9781250095282",
        bestseller: true
    },
    {
        _id: "b0046",
        name: "The Alchemist",
        description: "A philosophical fable about following your dreams.",
        price: 10,
        image: ["book_img46"],
        category: "Philosophy",
        genre: "Allegory",
        author: "Paulo Coelho",
        publisher: "HarperCollins",
        date: 621199200000,
        language: ["Portuguese"],
        ISBN: "9780062315007",
        bestseller: true
    },
    {
        _id: "b0047",
        name: "Percy Jackson & the Olympians: The Lightning Thief",
        description: "A modern adventure based on Greek mythology.",
        price: 12,
        image: [book_img47],
        category: "Fantasy",
        genre: "Mythology",
        author: "Rick Riordan",
        publisher: "Disney-Hyperion",
        date: 1612137600000,
        language: ["English"],
        ISBN: "978-0786838653",
        bestseller: false
    },
    {
        _id: "b0048",
        name: "The Hunger Games",
        description: "A dystopian novel about survival in a brutal televised competition.",
        price: 14,
        image: [book_img48],
        category: "Young Adult",
        genre: "Dystopian",
        author: "Suzanne Collins",
        publisher: "Scholastic Press",
        date: 1609459200000,
        language: ["English"],
        ISBN: "978-0439023481",
        bestseller: true
    },
    {
        _id: "b0049",
        name: "The Odyssey",
        description: "Homer's epic poem about a hero's journey home.",
        price: 15,
        image: [book_img49],
        category: "Poetry",
        genre: "Poetry",
        author: "Homer",
        publisher: "Penguin Classics",
        date: 1569888000000,
        language: ["Ancient Greek"],
        ISBN: "978-0140268867",
        bestseller: true
    },
    {
        _id: "b0050",
        name: "The Kite Runner",
        description: "A powerful story of friendship and redemption in Afghanistan.",
        price: 14,
        image: [book_img50],
        category: "Fiction",
        genre: "Historical Fiction",
        author: "Khaled Hosseini",
        publisher: "Riverhead Books",
        date: 1585699200000,
        language: ["English"],
        ISBN: "978-1594631931",
        bestseller: true
    },
    {
        _id: "b0051",
        name: "The Time Traveler's Wife",
        description: "A love story complicated by time travel.",
        price: 13,
        image: [book_img51],
        category: "Fiction",
        genre: "Romance",
        author: "Audrey Niffenegger",
        publisher: "MacAdam/Cage",
        date: 1601510400000,
        language: ["English"],
        ISBN: "978-1931561464",
        bestseller: false
    },
    {
        _id: "b0052",
        name: "The Night Circus",
        description: "A fantastical competition between two young illusionists.",
        price: 12,
        image: ["book_img52"],
        category: "Fantasy",
        genre: "Magical Realism",
        author: "Erin Morgenstern",
        publisher: "Doubleday",
        date: 1590969600000,
        language: ["English"],
        ISBN: "978-0385534635",
        bestseller: true
    }
];
