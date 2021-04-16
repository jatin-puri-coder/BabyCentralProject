exports.seed = function(knex) {

    return knex('photographers').del()
        .then(function () {

            return knex('photographers').insert([
                
                { id: 1, name: 'Chelsea Haworth', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: "Chelsea Haworth's photography and artistic style is unique and emotional with an artistic flare. She has a talent for capturing the beauty of pregnancy, newborns, babies, and families. You can trust that you will come out with stunning portraits that you love and will proudly hang on your walls for many years to come. She has a wide range of gowns, props, fabrics, wraps, hats and accessories to use at your session. Your session is unique, so if you want simple portraits or colourful portraits, Chelsea will work with your style and needs to create your own beautiful art." , website:'https://chelseahaworthphotography.co.nz/'},
                { id: 2, name: 'Little Lovely', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: "With newborn portraiture at the heart of her passion for photography, Natalia is one of the leading professional newborn photographers in Auckland. Natalia has photographed hundreds of newborn babies, and in addition to being an expert in traditional newborn posing she offers relaxed documentary-style, newborn lifestyle photography sessions in the comfort of her clients’ own homes." , website:'https://www.littlelovely.co.nz/'},
                { id: 3, name: 'Lisa Quirk', location: 'Rotorua' , image: '../images/MainBabyPhoto.jpeg', about: "Its hard to write about yourself! My photography journey has been a convoluted one, when I first started my focus was purely newborns, I love the tiny humans! But then the more I learnt and grew I realised I didn’t want to only to one type of photography. I love people, I love capturing people (Ill never be a landscape photographer, unless I can put people in it ;-) )  Lover of coffee and golden light, a bit partial to a spot of dancing (you might find me boogieing on down with your wedding guests with my camera above my head) but most of all I love family, So whether adding to your family, capturing it just as it is, or joining families together, I would love to capture yours! " , website:'https://www.lisaquirkphotography.co.nz'},
                { id: 4, name: 'Amy Cope', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: "Amy Cope is widely known as one of Auckland’s leading newborn photographers. She has been photographing for over 15 years, and specialises in creative newborn photography. She is recognized by the New Zealand Institute of Professional Photography as a qualified Master Photographer, and Amy and has won numerous awards both nationally and internationally. Her boutique purpose designed home studio, provides a warm, cosy, and safe environment for mums and their babies." , website:'https://amycope.co.nz/'},
                { id: 5, name: 'Siobhan Kelly', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: 'review here' , website:'https://www.siobhankelly.co.nz/newborn-photography/'},
                { id: 6, name: 'Milk', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: "Hey there, I'm Siobhan - otherwise known to some as the baby whisperer who runs Siobhan Kelly Photography. For over seven years now, I've been cuddling hundreds of newborns, chasing toddlers, and coaxing smiles out of parents - both here in New Zealand and over in the United Kingdom. I'm now based in Auckland, but welcome the opportunity to travel further abroad too!" , website:'https://www.milkphotography.co.nz/'},
                { id: 7, name: 'Hazel & Cass', location: 'Christchurch' , image: '../images/MainBabyPhoto.jpeg', about: "You will be welcomed into my Kendall Avenue Studio. Here I have created a dedicated studio space tailored specifically for newborns and babies. Here you can make yourself comfortable on the studio couch. From here you can watch me work my magic. I have a beautiful vintage prop collection on display. When you arrive you are invited to pick and choose favourite items from my collection. I provide all the props, but you are also welcome to bring with you any special items you would like incorporated into the session. My props are sourced internationally and locally and from renowned suppliers. My props include a range of organic lambs wool layers, hand knitted rompers, wraps and bonnets, antique bowls and hand-crafted tiebacks." , website:'https://www.hazelandcass.co.nz/'},
                { id: 8, name: 'Photo Hive', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: "Our niche is from pregnancy right through to 5 years and our photo shoots are based on capturing your families journey through this precious time. We offer Maternity Photography for the expecting mum, Newborn Photography for the new family, 100 Days Photo Shoot to honour tradition, Family Photography for everyone and Cake Smash Photo Shoots to celebrate. With over 10 years photography experience head photographer Julia Bielan’s expertise are second to none. Being a mum herself she knows exactly how precious newborn babies are and will safely calm, sooth and relax your baby for the session. Julia will be on hand before your shoot to discuss your ideas, preferences and even how to prepare for shoot day during your complimentary consultation." , website:'https://www.photohive.co.nz/'},
                { id: 9, name: 'Little Mannequins', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: " Welcome to little M portrait photography. My photo studio is based in Auckland, on the North Shore in the central suburb of Milford, New Zealand.  Specialising in bespoke pregnancy and newborn baby photos. Natural portraits of babies & children. Capturing portraits that evoke beautiful memories of love between beautiful people. Celebrating your life in a natural, fun loving portrait studio experience, that will leave you feeling happy and joyful." , website:'https://littlemannequins.com/'},
                { id: 10, name: 'Hannah Webb', location: 'Auckland' , image: '../images/MainBabyPhoto.jpeg', about: "Babies are my favourite subjects - I will tiptoe into your home and capture the early days for you - candid, relaxed and at your baby's pace. I love to get the whole family in the frame too - the bond between Mum & Bubs, the new big bro or sis, the proud Dad moments, and even the Fur babies. You can choose between a Mini Newborn Shoot which is shorter and great for more relaxed shots, or a Complete Newborn session which is a longer session, to allow for more beautifully natural posed shots of your baby as well as the family and candid shots. The days may feel long, but the years are fast, so capture all of their gorgeous early days with my natural, timeless portraits. I love to capture beautiful images of babies - even in my more posed shots I love to use natural neutral tones, natural materials and minimal props (although I do have a favourite rattan basket that usually makes an appearance!). If you are looking for a photographer who does many different colour set ups, babies in boxes and buckets and full heavy wrap set ups then we may not be the best fit - have a look at my portfolio and feel free to contact me to ask questions!" , website:'https://www.hannahwebb.nz/newborn/'}
            ])
        })
}