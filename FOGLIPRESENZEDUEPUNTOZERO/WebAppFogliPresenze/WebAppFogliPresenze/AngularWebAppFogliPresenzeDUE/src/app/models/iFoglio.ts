import { IOra } from 'src/app/models/iOra';
import { ICategoria } from 'src/app/models/iCategoria';

export interface IFoglio {

    Id: number;
    DipendenteId: number;
    Anno: number;
    Mese: number;
    Stato: string;
    Ore: Array<IOra>;
    GiorniFestivi: Array<number>;
    TotaliGiornalieri: Array<number>;
    TotaliCategorie: Array<ICategoria>;
    Anomalie: Array<string>;
}