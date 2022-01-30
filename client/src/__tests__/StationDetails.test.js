import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import StationDetails from "../compnents/station/StationDetails";
import {createTestStation} from "../testUtils";

describe('StationDetails', () => {
    it('Shall correctly format name', () => {
        render(
            <StationDetails
                station={createTestStation()}
            />
        );
        expect(screen.getByText("Bysykkelstasjon")).toBeInTheDocument();
    });

    it('Shall correctly format address', () => {
        render(
            <StationDetails
                station={createTestStation()}
            />
        );
        expect(screen.getByText("Karl Johans gate 1")).toBeInTheDocument();
    });

    it('Shall correctly format number of bikes descriptor with single bike', () => {
        render(
            <StationDetails
                station={createTestStation()}
            />
        );
        expect(screen.getByText("1 ledig sykkel")).toBeInTheDocument();
    });

    it('Shall correctly format number of bikes descriptor with multiple bikes', () => {
        let station = createTestStation();
        station.status.num_bikes_available=20
        render(
            <StationDetails
                station={station}
            />
        );
        expect(screen.getByText("20 ledige sykler")).toBeInTheDocument();
    });

    it('Shall correctly indicate that station is open', () => {
        render(
            <StationDetails
                station={createTestStation()}
            />
        );
        expect(screen.getByText("Stasjonen er åpen!")).toBeInTheDocument();
    });

    it('Shall correctly indicate that station is closed', () => {
        let station = createTestStation();
        station.status.is_renting = false;

        render(
            <StationDetails
                station={station}
            />
        );
        expect(screen.getByText("Beklager, stasjonen er stengt")).toBeInTheDocument();
    });

});
