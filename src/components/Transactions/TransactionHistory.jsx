import {TableHistory,
    TableHistoryThead,
    TableHistoryTheadTr,
    TableHistoryTheadTh,
    TableHistoryBody,
    TableHistoryBodyTr,
    TableHistoryBodyTd,} from './TransactionHistory.styled'

export const TransactionHistory = ({items}) =>{
    const itemsMarkup = items.map(item=>
        <TableHistoryBodyTr key={item.id}>
        <TableHistoryBodyTd>{item.type}</TableHistoryBodyTd>
        <TableHistoryBodyTd>{item.amount}</TableHistoryBodyTd>
        <TableHistoryBodyTd>{item.currency}</TableHistoryBodyTd>
        </TableHistoryBodyTr>);
    return (
        <TableHistory>
            <TableHistoryThead>
                <TableHistoryTheadTr>
                    <TableHistoryTheadTh>Type</TableHistoryTheadTh>
                    <TableHistoryTheadTh>Amount</TableHistoryTheadTh>
                    <TableHistoryTheadTh>Currency</TableHistoryTheadTh>
                </TableHistoryTheadTr>
            </TableHistoryThead>
            <TableHistoryBody>
                {itemsMarkup}
            </TableHistoryBody>
        </TableHistory>
    )
}