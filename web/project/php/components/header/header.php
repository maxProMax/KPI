<header>
    <img src="https://cdn.coraltravel.ua/content/logocoraltravelru-25f77d24.svg" style="width: 200px; height: 100px" alt="Логотип" />

    <?php
    include 'php/modules/login.php';

    if (!$username || $loginError) {
        include 'php/components/header/form.php';
    } else {
        include 'php/components/header/userGreeting.php';
    }

    ?>
    <!-- <form method='post' action="./index.php">
        <input type="text" name="username" placeholder="Логин" />
        <input type="password" name="password" placeholder="Пароль" />
        <button>Логін</button>
    </form> -->
</header>