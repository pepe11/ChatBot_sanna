//import { IAddress, IMessage, Message, Prompts, Session, UniversalBot } from 'botbuilder';
//import { expect } from 'chai';
//import { BotTester, TestConnector } from 'bot-tester';
//import { getAdaptiveCard, getAdaptiveCardAttachment, getAdaptiveCardMessage } from './adaptiveCardProvider';

var builder = require("botbuilder");
var chai = require("chai");
var tester = require("bot-tester");

const connector = new tester.TestConnector();

describe('BotTester', () => {
    let bot;

    beforeEach(() => {
        bot = new builder.UniversalBot(connector);
    });

    // ... tests live here!
    it('insert user with confirm', function(done) {
    	this.timeout(10000);
    	setTimeout(done, 10000);
        
        bot.dialog('/', [(session) => {
            session.beginDialog("insertUserService:/", { parameters : { Nome_utente_ins : "nomeUserTest", Cognome_utente_ins : "cognomeUserTest", Email_utente_ins : "emailNonValidaPerTest", Azienda_utente_ins : 111 } });
        }]);

        bot.library(require('./insertUserService').createLibrary());
        bot.library(require('./../messenger/messenger').createLibrary());

        try {
        	new tester.BotTester(bot)
	            .sendMessageToBot('emailNonValidaPerTest', '* **Email non valida.** * \n\n *Inserire un indirizzo mail valido.*', "*Inserisci indirizzo email:*")
	            .sendMessageToBot('email@test.ts', '* **Nessuna azienda corrisponde al numero di P.IVA specificato** *', '*Inserisci numero P.IVA o digita **AnnullaOperazione**:*')
	            .sendMessageToBot('2222222', '**Riepilogo:** \n\n *Nome:* nomeUserTest\n\n *Cognome:* cognomeUserTest\n\n *Email:* email@test.ts\n\n *Azienda:* 2222222', '*Confermi le informazioni?*')
	            .sendMessageToBot('Si', '**Utente inserito**')
                .runTest();
        }
        catch(err) {
        	throw err;
        }
        
        done();
    });

    it('insert user with no confirm', function(done) {
        this.timeout(10000);
        setTimeout(done, 10000);
        
        bot.dialog('/', [(session) => {
            session.beginDialog("insertUserService:/", { parameters : { Nome_utente_ins : "nomeUserTest", Cognome_utente_ins : "cognomeUserTest", Email_utente_ins : "emailNonValidaPerTest", Azienda_utente_ins : 111 } });
        }]);

        bot.library(require('./insertUserService').createLibrary());
        //bot.library(require('./../messenger/messenger').createLibrary());
        bot.library(require('./../mainDialog').createLibrary());

        try {
            new tester.BotTester(bot)
                .sendMessageToBot('emailNonValidaPerTest', '* **Email non valida.** * \n\n *Inserire un indirizzo mail valido.*', "*Inserisci indirizzo email:*")
                .sendMessageToBot('email@test.ts', '* **Nessuna azienda corrisponde al numero di P.IVA specificato** *', '*Inserisci numero P.IVA o digita **AnnullaOperazione**:*')
                .sendMessageToBot('2222222', '**Riepilogo:** \n\n *Nome:* nomeUserTest\n\n *Cognome:* cognomeUserTest\n\n *Email:* email@test.ts\n\n *Azienda:* 2222222', '*Confermi le informazioni?*')
                .sendMessageToBot('No', '*Scegli l\'azione da intraprendere*')
                .sendMessageToBot('Torna alla sezione principale', ['**Benvenuto!** \n\n *Non sei attualmente loggato.* \n\n *Seleziona la funzione **Sign In** per accedere.*', "**Sezione principale** \n\n Scegli l'azione da intraprendere: \n\n *(Digita il numero corrispondente alla scelta)*"])
                .runTest();
        }
        catch(err) {
            throw err;
        }
        
        done();
    });

});

