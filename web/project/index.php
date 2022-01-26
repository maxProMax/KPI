<?php
include './php/db/connect_to_db.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Туристична компаниія</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./css/index.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/index.js" async></script>
</head>

<body>
    <?php include './php/components/header/header.php'; ?>
    <nav class="page-side-nav">
        <ul>
            <li>Головна</li>
            <li>Всі тури</li>
        </ul>
    </nav>
    <main class="page-content page-content_home">
        <h2 class="page-content-title">Лучшие предложения</h2>
        <section class="search-result">
            <?php include 'php/components/tabel.php'; ?>
            <section>
                <h5>Полезные рекомендации</h5>
                <p>
                    Приехав в Египет в качестве гостя, вы должны уважать
                    обычаи страны.
                </p>
            </section>
        </section>
        <form action="index.php" method="post" class="search-form">
            <label for="country">Пошук по країні:</label>
            <input type="text" name="country" placeholder="Країна" />
            <button>Пошук</button>
        </form>
    </main>
    <footer>
        <p class="footer-countries">
            Туроператор по Турции, Египту, Украине, Греции, Испании, Тунису,
            Кипру, Марокко, ОАЭ, Таиланду, Израилю, Андорре, Бали, Сейшелам,
            Кубе, Мексике, Доминиканской Республике, Индии, Австрии,
            Вьетнаме, Сингапуре, Мальдивам, Болгарии, Вьетнаму, Маврикию,
            Танзании, Иордании, Шри-Ланке.
        </p>
    </footer>
</body>

</html>