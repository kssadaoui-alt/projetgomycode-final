"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = __importStar(require("bcrypt"));
const user_schema_1 = require("../../schemas/user.schema");
let UserService = class UserService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async registerUser(createUserDto) {
        const { uName, uEmail, uAddress, uPhone, uPass, uType } = createUserDto;
        if (!uName || !uEmail || !uPass || !uAddress || !uPhone) {
            throw new common_1.BadRequestException('All fields are required');
        }
        const existingUser = await this.userModel.findOne({ uEmail });
        if (existingUser) {
            throw new common_1.BadRequestException('User already exists');
        }
        const hashedPassword = await bcrypt.hash(uPass, 10);
        const newUser = new this.userModel({
            uName,
            uEmail,
            uAddress,
            uPhone,
            uPass: hashedPassword,
            uType: uType || 'User',
        });
        await newUser.save();
        return { message: 'User registered successfully' };
    }
    async getAllUsers() {
        const users = await this.userModel.find({});
        if (users.length === 0) {
            throw new common_1.NotFoundException('No users found');
        }
        return users;
    }
    async loginUser(loginUserDto) {
        const { uEmail, uPass } = loginUserDto;
        if (!uEmail || !uPass) {
            throw new common_1.BadRequestException('All fields are required');
        }
        const user = await this.userModel.findOne({ uEmail });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const isPasswordCorrect = await bcrypt.compare(uPass, user.uPass);
        if (!isPasswordCorrect) {
            throw new common_1.BadRequestException('Incorrect password');
        }
        const responseMessage = user.uType === 'User' ? 'Found User' : 'Found Admin';
        return { status: 'ok', message: responseMessage, uId: user._id };
    }
    async deleteUser(uId) {
        const user = await this.userModel.findByIdAndDelete(uId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return { message: 'User deleted successfully' };
    }
    async getUserById(uId) {
        const user = await this.userModel.findById(uId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map