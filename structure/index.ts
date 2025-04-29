import type { StructureResolver } from "sanity/structure";
import { CalendarIcon, UserIcon, PinIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
    S.list()
    .id("root")
    .title("Content")
    .items([
        S.documentTypeListItem("event").title("Events").icon(CalendarIcon),
        S.documentTypeListItem("artist").title("Artists").icon(UserIcon),
        S.documentTypeListItem("venue").title("Venues").icon(PinIcon),
    ])