import {ICategoria} from './ICategoria'
import {IOra} from './IOra'

export interface IFoglio {
    Id:number;
    DipendenteId: number;
    Anno: number;
    Mese: number;
    Stato: string;
    Ore : Array<IOra>;
    GiorniFestivi: Array<number>;
    TotaliGiornalieri: Array<number>;
    TotaliCategorie: Array<ICategoria>;
    Anomalie: Array<string>;
}