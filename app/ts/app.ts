import { NegotiationController } from './controllers/NegotiationController';

const controller = new NegotiationController();
// utilizando jquery
$('.form').submit(controller.add.bind(controller))
$('#botao-importar').click(controller.importData.bind(controller))