const express = require('express');
const router = express.Router();
const OrderController = require('../../controllers/admin/orderController');
const { attachUserDetail } = require('../../middlewares/getUserDetail ');
const { checkJWT } = require('../../middlewares/checkJWT');
const { authorize } = require('../../middlewares/authorize');
router.use(checkJWT);
router.use(attachUserDetail)
router.use(authorize("Order"))
router.put('/:id/status', OrderController.updateStatus); // ✅ THÊM DÒNG NÀY
router.put('/:id/cancel', OrderController.cancelOrder);  // ✅ hủy đơn có lý do
router.get('/:orderId/returns', OrderController.getReturnByOrder); // ✅ lấy tất cả yêu cầu trả hàng của đơn
router.put('/returns/:id/status', OrderController.updateReturnStatus);   // ✅ duyệt/trả lời yêu cầu trả hàng

// Quản lý yêu cầu hoàn tiền
router.get('/:orderId/refunds', OrderController.getRefundByOrder); // ✅ lấy tất cả yêu cầu hoàn tiền của đơn
router.put('/refunds/:id/status', OrderController.updateRefundStatus);   // ✅ duyệt/trả lời yêu cầu hoàn tiền

// ➤ Gọi: /admin/list
router.get('/list', OrderController.getAll);
router.get('/:id', OrderController.getDetail);
module.exports = router;
