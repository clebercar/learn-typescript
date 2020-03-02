import { View } from './View';
import { Negotiations } from '../models/Negotiations';

export class NegotiationsView extends View<Negotiations> {
    template(model: Negotiations): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>

                    ${model.toArray().map(negotiation => 
                    `
                        <tr>
                            <td>
                                ${negotiation.date.getDate()}/
                                ${negotiation.date.getMonth()+1}/
                                ${negotiation.date.getFullYear()}
                            </td>
                            <td>${negotiation.quantity}</td>
                            <td>${negotiation.value}</td>
                            <td>${negotiation.value}</td>
                        </tr>                        
                    `).join('')}  
                <tfoot>
                </tfoot>
            </table>               
        `
    }
}