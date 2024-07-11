import { v4 as uuidv4 } from 'uuid';
import type { CardInterface } from '@/shared/interface/Card.interface';
import { defineStore } from 'pinia';

interface CardsGameState {
  cards: CardInterface[];
  cardsDeck: CardInterface[];
  shuffledCardsDeck: CardInterface[],
  selectedCards: CardInterface[];
  lastCards: CardInterface[];
  lastCardsPair: boolean | null;
  chosenCards: CardInterface[];
  endGame: boolean;
  isLoading: boolean;
  pair: boolean | null;
}

export const useCardsStore = defineStore("cardsGame", {
  state: (): CardsGameState => ({
    cards: [],
    cardsDeck: [],
    shuffledCardsDeck: [],
    selectedCards: [],
    lastCards: [],
    lastCardsPair: null,
    chosenCards: [],
    endGame: false,
    isLoading: false,
    pair: null,
  }),

  getters: {
    cardsList: (state: CardsGameState): CardInterface[] => state.cards,

    cardsSelection: (state: CardsGameState): CardInterface[] => {
      const list = [...state.cards]
      return list.slice(0, 12)
    },
  },

  actions: {
    importCards(data: CardInterface[]) {
      this.isLoading = true;
      const cardsList = data;
      if (Array.isArray(cardsList)) {
        this.cards = cardsList;
      } else {
        this.cards = [cardsList];
      }
      this.isLoading = false;
    },


    restartGame() {
      this.cards.forEach(card => card.selected = false)
      this.cardsDeck = []
      this.shuffledCardsDeck = []
      this.selectedCards = []
      this.lastCards = []
      this.chosenCards = []
      this.endGame = false
      this.isLoading = false
      this.pair = null
    },


    addToDeck(card: CardInterface) {
      this.cardsDeck.push({ ...card }, { ...card });
    },

    removeFromDeck(card: CardInterface) {
      this.cardsDeck = this.cardsDeck.filter(item => item.id !== card.id);
    },

    addFullDeck(cards: CardInterface[]) {
      this.cardsDeck = []
      this.cardsDeck = this.cards.map(card => ({ ...card, selected: true }));
      this.shuffledCards()
    },


    shuffledCards() {
      const shuffled = [...this.cardsDeck];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      this.shuffledCardsDeck = shuffled
    },

    addToCompareCard(card: CardInterface) {
      this.selectedCards.push(card);
    },

    compareCards() {
      if (this.selectedCards.length < 2) return false;
      const result = this.selectedCards[0].itemName === this.selectedCards[1].itemName;
      return result;
    },

    analysisFindedCards() {
      if (this.selectedCards.length === 2) {
        this.lastCards = [...this.selectedCards]
        if (this.compareCards()) {
          this.pair = true;
          this.lastCardsPair = true;
          this.shuffledCardsDeck.forEach(card => {
            if (card.itemName === this.selectedCards[0].itemName || card.itemName === this.selectedCards[1].itemName) {
              card.view = true;
            }
          });

          this.selectedCards = [];
        } else {
          this.pair = false;
          this.lastCardsPair = false;
          this.selectedCards.forEach(card => card.view = false);
          this.selectedCards = [];
        }

        setTimeout(() => {
          this.pair = null;
        }, 1000);
      }
    },

  },
});