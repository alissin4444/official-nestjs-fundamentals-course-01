import { CoffeesService } from '../coffes/coffes.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(paginationQuery: any): import("./entities/coffe.entity").Coffee[];
    findOne(id: string): import("./entities/coffe.entity").Coffee;
    create(createCoffeDto: CreateCoffeDto): any;
    update(id: string, updateCoffeDto: UpdateCoffeDto): void;
    remove(id: string): void;
}
