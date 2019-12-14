import React, { Component } from 'react';
import Card from './Cards/Card.js';
import principles from '../principles.json';
import Button from './Button/Button.js';
import CardModal from './Cards/CardModal';
import Intro from './Intro/Intro';
// import CategoryFilterButton from './CategoryFilterButton';

function compareStrings(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export default class Principles extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            allFlipped: false,
            showModal: false,
            cardInModal: principles[0],
            // check if checkbox is clicked
            checkGame: false,
            checkLearn: false,
            // check if currently under game or learn
            underGame: false,
            underLearn: true,
            // cat 1-3 are learning principle categories
            showCat1: true,
            showCat2: true,
            showCat3: true,
            // cat 4-9 are game design categories
            showCat4: true,
            showCat5: true,
            showCat6: true,
            showCat7: true,
            showCat8: true,
            showCat9: true,
            // indicate currently under game or learn
            showGame: true,
            showLearn: false,
            // height of menu bar
            gHeight: '100',
            lHeight: '100',
            screenWidth: 0,
            // category title
            title:'All Game Design Principles',
            color: '#545454',
            // intro pop-up
            showPopup: false,
        };

        this.togglePopup= this.togglePopup.bind(this);
        this.toggleLearn = this.toggleLearn.bind(this);
        this.toggleGame = this.toggleGame.bind(this);
        this.flipAll = this.flipAll.bind(this);
        this.sortAZ = this.sortAZ.bind(this);
        this.sortGameNumerical = this.sortGameNumerical.bind(this);
        this.sortLearnNumerical = this.sortLearnNumerical.bind(this);
        this.resetCards = this.resetCards.bind(this);
        this.shuffleCards = this.shuffleCards.bind(this);
        this.draw5Cards = this.draw5Cards.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.modalNavToNext = this.modalNavToNext.bind(this);
        this.modalNavToPrev = this.modalNavToPrev.bind(this);
        this.modalOpenRelated = this.modalOpenRelated.bind(this);
        this.openRandomCard = this.openRandomCard.bind(this);
        this.handleGame =   this.handleGame.bind(this);
        this.handleLearn =   this.handleLearn.bind(this);
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    componentDidMount() {
        const wid = window.innerWidth;
        this.setState({cards: principles, screenWidth: wid});
    }

    //utility
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Learning Principle category actions
    toggleLearn(cat) {
        this.setState({
            underLearn: true,
            underGame: false,
        });
        if (cat === 1) {
            this.setState({
                showCat1: true,
                showCat2: true,
                showCat3: true,
                title: 'All Learning Science Principles',
                color: '#545454'
            });
        } else if (cat === 2) {
            this.setState({
                showCat1: true,
                showCat2: false,
                showCat3: false,
                title: 'Memory / Fluency',
                color: '#F0AA86'
            });
        } else if (cat === 3) {
            this.setState({
                showCat1: false,
                showCat2: true,
                showCat3: false,
                title:'Induction / Refinement',
                color: '#E79D9D'
            });
        } else if (cat === 4) {
            this.setState({
                showCat1: false,
                showCat2: false,
                showCat3: true,
                title:'Sense-Making / Understanding',
                color: '#d19ecd'
            });
        }
    }
    // Game Design category actions
    toggleGame(cat) {
        this.setState({
            underLearn: false,
            underGame: true,
        });
        if (cat === 1) {
            this.setState({
                showCat4: true,
                showCat5: true,
                showCat6: true,
                showCat7: true,
                showCat8: true,
                showCat9: true,
                title: 'All Game Design Components',
                color: '#545454'
            });
        } else if (cat === 2) {
            this.setState({
                showCat4: true,
                showCat5: false,
                showCat6: false,
                showCat7: false,
                showCat8: false,
                showCat9: false,
                title: 'Pacing',
                color: '#F0AA86'
            });
        } else if (cat === 3) {
            this.setState({
                showCat4: false,
                showCat5: true,
                showCat6: false,
                showCat7: false,
                showCat8: false,
                showCat9: false,
                title: 'Look & Feel',
                color: '#E79D9D'
            });
        } else if (cat === 4) {
            this.setState({
                showCat4: false,
                showCat5: false,
                showCat6: true,
                showCat7: false,
                showCat8: false,
                showCat9: false,
                title: 'Interaction',
                color: '#d19ecd'
            });
        } else if (cat === 5) {
            this.setState({
                showCat4: false,
                showCat5: false,
                showCat6: false,
                showCat7: true,
                showCat8: false,
                showCat9: false,
                title: 'Gamer Onboarding',
                color: '#A7DA71',
            });
        }else if (cat === 6) {
            this.setState({
                showCat4: false,
                showCat5: false,
                showCat6: false,
                showCat7: false,
                showCat8: true,
                showCat9: false,
                title: 'Help & Aid',
                color: '#9ADCE0'
            });
        } else if (cat === 7) {
            this.setState({
                showCat4: false,
                showCat5: false,
                showCat6: false,
                showCat7: false,
                showCat8: false,
                showCat9: true,
                title: 'Reflection / Reinforcement',
                color: '#99C6ED'
            });
        }
    }

    isCategoryHidden(cat) {

        //if all three are hidden, show all (as opposed to nothing)
        if (!this.state.showCat1 &&
            !this.state.showCat2 &&
            !this.state.showCat3 &&
            !this.state.showCat4 &&
            !this.state.showCat5 &&
            !this.state.showCat6 &&
            !this.state.showCat7 &&
            !this.state.showCat8 &&
            !this.state.showCat9) {
            return false;
        }

        //hide based on state
        if (cat === 1) {
            return !this.state.showCat1;
        } else if (cat === 2) {
            return !this.state.showCat2;
        } else if (cat === 3){
            return !this.state.showCat3;
        } else if (cat === 4){
            return !this.state.showCat4;
        } else if (cat === 5){
            return !this.state.showCat5;
        } else if (cat === 6){
            return !this.state.showCat6;
        } else if (cat === 7){
            return !this.state.showCat7;
        } else if (cat === 8){
            return !this.state.showCat8;
        } else{
            return !this.state.showCat9;
        }
    }

    /* --------------------
     *     Action Bar
     * --------------------*/

    //toolbar actions
    flipAll() {
        let items = this.state.cards;
        for (let card of items) {
            card.flipped = !this.state.allFlipped;
        }
        this.setState({cards: items});
        this.setState({allFlipped: !this.state.allFlipped});

        console.log(this.state);
    }

    sortGameNumerical() {
        let items = this.state.cards;
        items.sort(function(a, b){return (a.gameId - b.gameId);});
        this.setState({cards: items});
    }
    sortLearnNumerical() {
        let items = this.state.cards;
        items.sort(function(a, b){return (a.id - b.id);});
        this.setState({cards: items});
    }

    sortAZ() {
        let items = this.state.cards;
        items.sort(function(a, b) {
            return compareStrings(a.principle, b.principle);
        });
        this.setState({cards: items});
    }

    shuffleCards() {
        let shuffled = this.shuffle(this.state.cards);
        this.setState({cards: shuffled});
    }

    draw5Cards() {
        this.setState({showCat1: true});
        this.setState({showCat2: true});
        this.setState({showCat3: true});

        let cards = this.shuffle(principles);
        let hand = cards.slice(0, 5);
        this.setState({cards: hand});
    }


    //card flip actions, etc
    resetCards() {
        let items = principles;
        items.sort(function(a, b){return (a.id - b.id);});
        for (let card of items) {
            card.flipped = false;
        }
        this.setState({cards: items});
        this.setState({showCat1: true});
        this.setState({showCat2: true});
        this.setState({showCat3: true});
    }

    flipToBack(flipcard) {
        if(!flipcard.id) {
            flipcard = this.state.cardInModal;
        }
        let items = this.state.cards;
        for (let card of items) {
            if (card.id === flipcard.id) {
                card.flipped = false;
            }
        }
        this.setState({cards: items});
    }

    flipToFront(flipcard) {
        if(!flipcard.id) {
            flipcard = this.state.cardInModal;
        }
        let items = this.state.cards;
        for (let card of items) {
            if (card.id === flipcard.id) {
                card.flipped = true;
            }
        }
        this.setState({cards: items});
    }



    //modal actions
    renderModal(card) {
        this.setState({cardInModal: card});
        this.setState({showModal: true});
    }

    modalNavToNext() {
        let currentCardIndex = this.state.cards.indexOf(this.state.cards.find(card => card.id === (this.state.cardInModal.id)));
        //if you are on the last card, go to the first one. If not, go to the next one.
        let nextCardIndex = ((currentCardIndex + 1) < this.state.cards.length) ? (currentCardIndex + 1) : 0;
        let nextCard = this.state.cards[nextCardIndex];

        this.setState({cardInModal: (nextCard)});
    }

    modalNavToPrev() {
        let currentCardIndex = this.state.cards.indexOf(this.state.cards.find(card => card.id === (this.state.cardInModal.id)));
        //If you are already on the first card, do nothing
        let prevCardIndex = (currentCardIndex === 0) ? currentCardIndex : (currentCardIndex - 1);
        let prevCard = this.state.cards[prevCardIndex];

        this.setState({cardInModal: (prevCard)});
    }

    modalOpenRelated(id) {
        let card = principles.filter(item => { return item.id == id; });
        this.setState({cardInModal: card[0]});
    }

    openRandomCard() {
        let min =1;
        let max = principles.length;
        let random = Math.floor(Math.random() * (+max - +min)) + +min;
        let card = principles[random];
        this.renderModal(card);
    }

    // menu options
    handleGame(){
        // this.sortGameNumerical();
        this.setState({
            checkGame: !this.state.checkGame,
        });

        if(event.target.checked === true) {

            if (this.state.screenWidth < 480) {
                this.setState({
                    gHeight: '680',
                    lHeight: '100',
                    checkLearn: false,
                });
            } else if (this.state.screenWidth < 992) {
                this.setState({
                    gHeight: '440',
                    lHeight: '100',
                    checkLearn: false,
                });
            } else {
                this.setState({
                    gHeight: '280',
                    lHeight: '100',
                    checkLearn: false,
                });
            }
        }else {
            this.setState({
                gHeight: '100'
            });
        }
    }

    handleLearn(){
        // this.sortLearnNumerical();
        this.setState({
            checkLearn: !this.state.checkLearn,
        });
        if(event.target.checked === true) {
            if (this.state.screenWidth < 480) {
                this.setState({
                    lHeight: '420',
                    gHeight: '100',
                    checkGame: false,
                });
            } else if (this.state.screenWidth < 992) {
                this.setState({
                    lHeight: '280',
                    gHeight: '100',
                    checkGame: false,
                });
            } else {
                this.setState({
                    lHeight: '190',
                    gHeight: '100',
                    checkGame: false,
                });
            }
        } else{
            this.setState({
                lHeight: '100'
            });
        }
    }

    // intro pop-up

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        let underGame = this.state.underGame;
        return (
            <div className='cards'>
                <div className={'main-tools'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <h3 className={'main-label'}>HOW DO YOU WANT TO LEARN:<button className="more" onClick={this.togglePopup}> <i className='fas fa-question'></i> </button></h3>
                            {/*<div className={'category-filters'}>*/}
                            {/*    <CategoryFilterButton cat={1} active={this.state.showCat1} onPress={() => this.toggleCategory(1)}/>*/}
                            {/*    <CategoryFilterButton cat={2} active={this.state.showCat2} onPress={() => this.toggleCategory(2)}/>*/}
                            {/*    <CategoryFilterButton cat={3} active={this.state.showCat3} onPress={() => this.toggleCategory(3)}/>*/}
                            {/*</div>*/}

                            <div className="menu" style = { { height: `${ this.state.gHeight }px`} }>
                                <input type="checkbox" checked={this.state.checkGame} className="gmenu-open" name="gmenu-open" id="gmenu-open" onChange={this.handleGame}/>

                                <label className="gamebtn" htmlFor="gmenu-open" onClick={this.sortGameNumerical} style={
                                    this.state.underGame ? {color: '#fff', background: '#7B978A' , border: '2px solid #7B978A'} : {background: '#fff', color:'#3F6050'}}>
                                    <p>Game Design</p>
                                </label>
                                <p className="menu-item" onClick={() => this.toggleGame(1)}>All</p>
                                <p className="menu-item" onClick={() => this.toggleGame(2)}>Pacing</p>
                                <p className="menu-item" onClick={() => this.toggleGame(3)}>Look & Feel</p>
                                <p className="menu-item" onClick={() => this.toggleGame(4)}>Interaction</p>
                                <p className="menu-item" onClick={() => this.toggleGame(5)}>Gamer Onboarding</p>
                                <p className="menu-item" onClick={() => this.toggleGame(6)}>Help & Aid</p>
                                <p className="menu-item line-2" onClick={() => this.toggleGame(7)}>Reflection & Reinforcement</p>
                            </div>

                            <div className="lmenu" style = { { height: `${ this.state.lHeight }px` } }>
                                <input type="checkbox" checked={this.state.checkLearn}  onClick={this.sortLearnNumerical} className="lmenu-open" name="lmenu-open" id="lmenu-open" onChange={this.handleLearn}/>
                                <label className="learnbtn" htmlFor="lmenu-open" style={
                                    this.state.underLearn ? {color: '#fff', background: '#7B978A' , border: '2px solid #7B978A'} : {background: '#fff', color: '#3F6050'}} >
                                    <p>Learning Science</p>
                                </label>
                                <p className="l-item" onClick={() => this.toggleLearn(1)}>All</p>
                                <p className="l-item" onClick={() => this.toggleLearn(2)}>Memory / Fluency</p>
                                <p className="l-item line-2" onClick={() => this.toggleLearn(3)}>Induction / Refinement</p>
                                <p className="l-item line-2" onClick={() => this.toggleLearn(4)}>Sense-Making / Understanding</p>
                            </div>

                        </div>
                    </div>

                    <div className={'flat'}>
                        <div className={'toolbar'}>
                            <h3 className={'action'}>Actions:</h3>
                            <Button onClick={this.resetCards} text={'Reset'} icon={'undo-alt'}></Button>
                            <Button onClick={this.flipAll} text={'Flip All'} icon={'exchange-alt'}></Button>
                            <Button onClick={this.sortAZ} text={'Sort A-Z'} icon={'sort-alpha-down'}></Button>
                            {/*<Button onClick={this.sortNumerical} text={'Sort Numeric'} icon={'sort-numeric-down'}></Button>*/}
                            <Button onClick={this.shuffleCards} text={'Shuffle'} icon={'random'}></Button>
                            <Button onClick={this.openRandomCard} text={'Random Card'} icon={'question'}></Button>
                            <Button onClick={this.draw5Cards} text={'Draw 5'} icon={'hand-paper'}></Button>
                        </div>
                    </div>
                </div>

                <div id={ 'identifier' }><div style={ {background: `${this.state.color}`} }></div>{ this.state.title }</div>

                <div className={'row'}>

                    {this.state.cards.map( card => (
                        <div key={card.id} className={'col-xs-12 col-sm-12 card-container ' +
                        (this.state.underGame ?
                            (this.isCategoryHidden(card.gameId+3) ? 'hide' : '') : (this.isCategoryHidden(card.categoryId) ? 'hide' : ''))}>
                            <Card
                                flipped={card.flipped}
                                id={card.id}
                                image={card.id}
                                categoryId={card.categoryId}
                                gameId={card.gameId}
                                categoryName={card.categoryName}
                                principle={card.principle}
                                description={card.description}
                                subtitle={card.subtitle}
                                examples={card.examples}
                                onOpen={() => this.renderModal(card)}
                                onFlipToFront={() => this.flipToFront(card)}
                                onFlipToBack={() => this.flipToBack(card)}
                                underGame={ underGame }
                            />
                        </div>
                    ))}

                </div>

                <CardModal
                    show={this.state.showModal}
                    onClose={this.handleClose}
                    onNext={this.modalNavToNext}
                    onPrev={this.modalNavToPrev}
                    onOpenRelated={this.modalOpenRelated}
                    id={this.state.cardInModal.id}
                    categoryId={this.state.cardInModal.categoryId}
                    gameId={this.state.cardInModal.gameId}
                    categoryName={this.state.cardInModal.categoryName}
                    principle={this.state.cardInModal.principle}
                    questions={this.state.cardInModal.questions}
                    description={this.state.cardInModal.description}
                    subtitle={this.state.cardInModal.subtitle}
                    examples={this.state.cardInModal.examples}
                    exampleGame={this.state.cardInModal.exampleGame}
                    exampleGameUrl={this.state.cardInModal.exampleGameUrl}
                    exampleGameDesc={this.state.cardInModal.exampleGameDesc}
                    related={this.state.cardInModal.related}
                    cited={this.state.cardInModal.cited}
                />

                {
                    this.state.showPopup ?
                        <Intro
                            closePopup={this.togglePopup.bind(this)}/>
                        : null
                }

            </div>
        );
    }
}
