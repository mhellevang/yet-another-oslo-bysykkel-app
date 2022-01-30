import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Station from "../compnents/station/Station";
import {createTestStation} from "../testUtils";

describe('Station', () => {
    it('Shall correctly format name', () => {
        render(
            <Station
                station={createTestStation()}
            />
        );
        expect(screen.getByText("Bysykkelstasjon")).toBeInTheDocument();
    });

    it('Shall correctly format address', () => {
        render(
            <Station
                station={createTestStation()}
            />
        );
        expect(screen.getByText("Karl Johans gate 1")).toBeInTheDocument();
    });

    it('Shall correctly format number of docks descriptor with single dock', () => {
        render(
            <Station
                station={createTestStation()}
            />
        );
        expect(screen.getByText("1 tilgjengelig")).toBeInTheDocument();
    });

    it('Shall correctly format number of docks descriptor with multiple docks', () => {
        let station = createTestStation();
        station.status.num_docks_available=20
        render(
            <Station
                station={station}
            />
        );
        expect(screen.getByText("20 tilgjengelige")).toBeInTheDocument();
    });

    it('Shall correctly format number of bikes descriptor with single bike', () => {
        render(
            <Station
                station={createTestStation()}
            />
        );
        expect(screen.getByText("1 sykkel")).toBeInTheDocument();
    });

    it('Shall correctly format number of bikes descriptor with multiple bikes', () => {
        let station = createTestStation();
        station.status.num_bikes_available=20
        render(
            <Station
                station={station}
            />
        );
        expect(screen.getByText("20 sykler")).toBeInTheDocument();
    });

    it('Shall correctly format last reported timestamp', () => {
        let date = new Date();
        date.setHours(date.getHours()-1)

        let station = createTestStation();
        station.status.last_reported = date.toISOString()
        render(
            <Station
                station={station}
            />
        );
        expect(screen.getByText("Sist oppdatert: omtrent en time siden")).toBeInTheDocument();
    });
});
