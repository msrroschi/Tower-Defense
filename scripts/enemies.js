function Enemy(size) {
    // Coordenadas iniciales del enemigo.
    this.x = -1,
    this.y = 10,
    //this.health = 100;

    // Imprime el enemigo en su posición actual.
    this.printEnemy = function () {
        // Avisa al juego que ha llegado al final de la partida.
        if (this.x < size) {
            let cell = document.querySelector(`tr.row${this.y} > td.cell${this.x}`);
            cell.classList.add('enemy');
        }
    }

    // Mueve la posición del enemigo.
    this.moveRight = function () {
        let previousX = this.x;
        this.x++;
        
        // Borra el enemigo de la posición anterior sólo si está dentro del tablero.
        if (previousX > -1) {
            let cell = document.querySelector(`tr.row${this.y} > td.cell${previousX}`);
            cell.classList.remove('enemy');
        }
    }

    this.moveUp = function () {
        let previousY = this.y;
        this.y--;

        // Borra el enemigo de la posición anterior sólo si está dentro del tablero.
        if (previousY > -1) {
            let cell = document.querySelector(`tr.row${previousY} > td.cell${this.x}`);
            cell.classList.remove('enemy');
        }
    }

    this.moveDown = function () {
        let previousY = this.y;
        this.y++;

        // Borra el enemigo de la posición anterior sólo si está dentro del tablero.
        if (previousY > -1) {
            let cell = document.querySelector(`tr.row${previousY} > td.cell${this.x}`);
            cell.classList.remove('enemy');
        }
    }

    this.moveLeft = function () {
        let previousX = this.x;
        this.x--;

        // Borra el enemigo de la posición anterior sólo si está dentro del tablero.
        if (previousX > -1) {
            let cell = document.querySelector(`tr.row${this.y} > td.cell${previousX}`);
            cell.classList.remove('enemy');
        }
    }
}