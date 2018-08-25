function initializeBoard() {
    let ticTac = {
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        clear: function () {
            this.board = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
        }
    }
    return ticTac;
}
