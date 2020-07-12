import { observable, action } from 'mobx'

class MainStore {
    @observable
    cellSize = 35;

    @observable
    addEventModal = false;

    @observable
    roadRendererRef = null;

    @action
    changeCellWidth = width => {
        this.cellWidth = width;
    }

    @action
    setAddEventModal = bool => {
        this.addEventModal = bool;
    }

    @action
    initRoadRenderer = ref => {
        this.roadRendererRef = ref
    }
}

export default MainStore