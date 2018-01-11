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
    it('delete user with confirm', function(done) {
    	this.timeout(10000);
    	setTimeout(done, 10000);
        
        bot.dialog('/', [(session) => {
            session.beginDialog("deleteUserService:/", { parameters : { Email_utente_canc : "bbb@bbb.bb "} });
        }]);

        bot.library(require('./deleteUserService').createLibrary());
        
        try {
        	new tester.BotTester(bot)
	            .sendMessageToBot('bbb@bbb.bb', 'L\'utente bbb@bbb.bb  non è presente nel sistema')
	            .sendMessageToBot('email@test.ts', '*Confermi l\'eliminazione dell\'utente email@test.ts?*')
	            .sendMessageToBot('Si', '**Utente eliminato**')
	            .runTest();
        }
        catch(err) {
        	return err;
        }
        
        done();
    });

    it('delete user with no confirm', function(done) {
    	this.timeout(10000);
    	setTimeout(done, 10000);
        
        bot.dialog('/', [(session) => {
            session.beginDialog("deleteUserService:/", { parameters : { Email_utente_canc : "bbb@bbb.bb "} });
        }]);

        bot.library(require('./deleteUserService').createLibrary());
        
        try {
        	new tester.BotTester(bot)
	            .sendMessageToBot('bbb@bbb.bb', 'L\'utente bbb@bbb.bb  non è presente nel sistema')
	            .sendMessageToBot('email@test.ts', '*Confermi l\'eliminazione dell\'utente email@test.ts?*')
	            .sendMessageToBot('No', '*Scegli l\'azione da intraprendere*')
	            .sendMessageToBot('Torna alla sezione principale', ['**Benvenuto!** \n\n *Non sei attualmente loggato.* \n\n *Seleziona la funzione **Sign In** per accedere.*', "**Sezione principale** \n\n Scegli l'azione da intraprendere: \n\n *(Digita il numero corrispondente alla scelta)*"])
	            .runTest();
        }
        catch(err) {
        	return err;
        }
        
        done();
    });
});

