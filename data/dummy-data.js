import Category from '../models/category'
import Meal from '../models/meal'

export const CATEGORIES = [
    new Category('c1', 'Italian', '#f5428d'),
    new Category('c2', 'Quick & Easy', '#f54242'),
    new Category('c3', 'Hamburgers', '#f5a442'),
    new Category('c4', 'German', '#f5d142'),
    new Category('c5', 'Light & Lovely', '#368dff'),
    new Category('c6', 'Exotic', '#41d95d'),
    new Category('c7', 'Breakfast', '#9eecff'),
    new Category('c8', 'Asian', '#b9ffb0'),
    new Category('c9', 'French', '#ffc7ff'),
    new Category('c10', 'Summer', '#47fced')
];

export const MEALS = [
    new Meal(
        'm1',
        ['c1', 'c2'],
        'Spaghetti with Tomato Sauce',
        'affordabale',
        'Simple',
        'https://media.istockphoto.com/id/1348369752/photo/seamless-food-background-made-of-opened-canned-food.jpg?s=612x612&w=is&k=20&c=MH7KWMIm8s0z-4ODClQholk-BjDeEObdro7VhLT2b_g=',
        20,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            '250 Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Boil sdfni nijp ;niuy huirgojc0',
            'Deal ogjo dsmohp[ dvniej sdokoj',
            'Wed sdfmo nopl[ ;mvo ;]',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
        ],
        false,
        true,
        true,
        true,
    ),
    new Meal(
        'm2',
        ['c3', 'c4'],
        'Spaghetti with Tomato Sauce',
        'affordabale',
        'Simple',
        'https://media.istockphoto.com/id/1339854693/photo/pumpkin-filled-ravioli-pasta-above-table-scene-on-a-dark-background.jpg?s=612x612&w=is&k=20&c=9RoB2Nq1UKSKUaE4WEZTPuEI4ehgPRrWPxP3kDhkpBI=',
        20,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            '250 Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Boil sdfni nijp ;niuy huirgojc0',
            'Deal ogjo dsmohp[ dvniej sdokoj',
            'Wed sdfmo nopl[ ;mvo ;]',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Wed sdfmo nopl[ ;mvo ;]',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
        ],
        false,
        true,
        false,
        false
    ),
    new Meal(
        'm3',
        ['c5', 'c6'],
        'Spaghetti with Tomato Sauce',
        'affordabale',
        'Simple',
        'https://media.istockphoto.com/id/1386628239/photo/a-plate-of-grilled-lamb-with-i%C3%A7-pilav-small-plates-carrots-tand%C4%B1r-kebab%C4%B1.jpg?b=1&s=170667a&w=0&k=20&c=HPirWBqWucvrJLX86IZh5w-2F0w5T9HT8YJouB5jZyE=',
        50,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            '250 Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Boil sdfni nijp ;niuy huirgojc0',
            'Deal ogjo dsmohp[ dvniej sdokoj',
            'Deal ogjo dsmohp[ dvniej sdokoj',
            'Wed sdfmo nopl[ ;mvo ;]',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
        ],
        false,
        false,
        false,
        true
    ),
    new Meal(
        'm4',
        ['c7', 'c8'],
        'Spaghetti with Tomato Sauce',
        'affordabale',
        'Simple',
        'https://media.istockphoto.com/id/1352855347/photo/italian-seafood-pasta.jpg?s=612x612&w=0&k=20&c=1UjAV21BOLasfPr7Nb7ibJIhAIPsuMRbh700KsaiaSM=',
        12,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            '250 Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Boil sdfni nijp ;niuy huirgojc0',
            'Deal ogjo dsmohp[ dvniej sdokoj',
            'Deal ogjo dsmohp[ dvniej sdokoj',
            'Wed sdfmo nopl[ ;mvo ;]',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
        ],
        true,
        true,
        true,
        false
    ),new Meal(
        'm5',
        ['c9', 'c10'],
        'Spaghetti with Tomato Sauce',
        'affordabale',
        'Simple',
        'https://media.istockphoto.com/id/1383962772/photo/nigerian-food.jpg?s=612x612&w=0&k=20&c=u-_1qwHBoY9Yh3alnsRbix6hxgl3_TXhT9lpEvlhH10=',
        100,
        [
            '4 Tomatoes',
            '1 Tablespoon of Olive Oil',
            '1 Onion',
            '250 Spaghetti',
            'Spices',
            'Cheese (optional)'
        ],
        [
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Boil sdfni nijp ;niuy huirgojc0',
            'Deal ogjo dsmohp[ dvniej sdokoj',
            'Wed sdfmo nopl[ ;mvo ;]',
            'Wed sdfmo nopl[ ;mvo ;]',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
            'Cut bal sdfnjo djooa sdd sdk mojweh cdfo',
        ],
        true,
        false,
        true,
        true,
    )
]