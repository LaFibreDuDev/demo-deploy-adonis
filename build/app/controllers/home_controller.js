var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PostRepository } from '../repositories/post_repository.js';
import { inject } from '@adonisjs/core';
let HomeController = class HomeController {
    postRepository;
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async index({ view, request }) {
        const posts = await this.postRepository.findAll();
        const queryParams = request.qs();
        return view.render('pages/home', { posts, queryParams });
    }
};
HomeController = __decorate([
    inject(),
    __metadata("design:paramtypes", [PostRepository])
], HomeController);
export default HomeController;
//# sourceMappingURL=home_controller.js.map