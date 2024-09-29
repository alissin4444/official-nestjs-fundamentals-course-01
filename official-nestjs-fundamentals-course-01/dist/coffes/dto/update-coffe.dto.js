"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoffeDto = void 0;
const create_coffe_dto_1 = require("./create-coffe.dto");
const mapped_types_1 = require("@nestjs/mapped-types");
class UpdateCoffeDto extends (0, mapped_types_1.PartialType)(create_coffe_dto_1.CreateCoffeDto) {
}
exports.UpdateCoffeDto = UpdateCoffeDto;
//# sourceMappingURL=update-coffe.dto.js.map