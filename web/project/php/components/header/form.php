<form method='post' action="./index.php">
    <?php

    if ($loginError) {
        echo '<p class="error-msg">Не правильний логін або пароль</p>';
    }

    ?>
    <input type="text" name="username" placeholder="Логин" />
    <input type="password" name="password" placeholder="Пароль" />
    <button>Логін</button>
</form>