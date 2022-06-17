import { BlockConstructable } from "core";
import Input from "./input";
import Button from "./button";
import Error from "./error";

export const components: BlockConstructable<any>[] = [Input, Button, Error];
