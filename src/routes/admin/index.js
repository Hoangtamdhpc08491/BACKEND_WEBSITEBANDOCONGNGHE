const express = require('express');
const router = express.Router();

const productRoutes = require('./productRoutes');
const variantRoutes = require('./variantRoutes');
const variantValueRoutes = require('./variantValue.routes'); 
const brandRoutes = require('./brand.route'); 
const categoryRoutes = require('./category.route'); 

const userRoutes = require('./user.route'); 
const couponRoutes = require('./coupon.routes'); 
const highlightedCategoryItemRoutes = require('./highlightedCategoryItem.routes'); 
const sectionRoutes = require('./section.routes'); 
const flashSaleRoutes = require('./flashSale.routes'); 
const postRoutes = require('./post.routes');
const postCategoryRoutes = require('./categoryPost.routes')
const orderRoutes = require('./order.routes');
const uploadRoutes = require("./upload.routes"); 
const bannerRoutes = require('./banner.routes'); 
const tagsRoute = require('./tags.route')
const permissionRoutes = require('./permission.route')
const roleRoutes= require('./role.route')
const notificationRoutes = require('./notification.route');
const notificationUserRoutes = require('./notificationUser.route');
const reviewRoutes = require('./Review.routes'); // 👈 mới thêm
const productQuestionRoutes = require('./productQuestion.route');
const dashboardRoutes = require('./dashboard.route')
const authRouters = require('./auth.route')
const systemSettingRoutes = require('./systemSetting.routes');
const skuRoutes = require("./sku.route")
router.use('/sku', skuRoutes); 
router.use('/system-settings', systemSettingRoutes);
router.use('/order', orderRoutes);  
router.use('/tags', tagsRoute)
router.use('/banners', bannerRoutes); 
router.use('/notifications', notificationRoutes);
router.use('/notification-users', notificationUserRoutes);
router.use('/permissions', permissionRoutes);
router.use('/roles', roleRoutes);
router.use('/product', productRoutes); 
router.use('/users', userRoutes); 
router.use('/post', postRoutes);
router.use('/post-category', postCategoryRoutes);
router.use('/variants', variantRoutes);
router.use('/variant-values', variantValueRoutes); 
router.use('/coupon', couponRoutes);
router.use('/highlighted-category-item', highlightedCategoryItemRoutes);
router.use('/sections', sectionRoutes); 
router.use('/flash-sale', flashSaleRoutes); 
router.use('/categories', categoryRoutes);
router.use("/upload-image", uploadRoutes);
router.use('/brands', brandRoutes);

router.use('/reviews', reviewRoutes); 
router.use('/product-questions', productQuestionRoutes);
router.use('/dashboard', dashboardRoutes); 
module.exports = router;
