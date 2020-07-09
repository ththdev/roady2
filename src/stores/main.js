import { observable, action } from 'mobx'

class MainStore {
    @observable
    cellWidth = 50;

    @observable
    drawable = true;

    @action
    changeCellWidth = width => {
        this.cellWidth = width;
    }

    @action
    setDrawable = bool => {
        this.drawable = bool;
        console.log(this.drawable)
    }
}

export default MainStore