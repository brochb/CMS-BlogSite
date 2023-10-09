const router = require('express').Router();
const { Comment } = require('../../models');

// The `/api/comments` endpoint

// GET all Comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      // include: [
      //   {
      //     model: Product,
      //     attributes: ['id', 'product_name'],
      //   }
      // ]
    });
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(err)
  }
});

// GET one Comment
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);
    if (!commentData) {
      res.status(404).json({ message: 'No Comment found with this id' });
      return;
    }
    res.status(200).json(commentData)
  } catch (err) {
    res.status(500).json(err)
  }
});

// // POST/Create new Comment
// router.post('/', async (req, res) => {
//   try {
//     const commentData = await Comment.create(req.body);
//     res.status(200).json(commentData);
//   } catch (error) {
//     console.log(err);
//     res.status(500).json(error);
//   }
// });

// // PUT/Update one Comment
// router.put('/:id', async (req, res) => {
//   try {
//     // Find the Comment by its ID
//     const CommentToUpdate = await Comment.findByPk(req.params.id, {
//       include: [
//         {
//           model: Product,
//           attributes: ['id'],
//           through: ProductComment,
//         },
//       ],
//     });

//     // Check if the Comment exists
//     if (!CommentToUpdate) {
//       res.status(404).json({ message: 'No Comment found with this id' });
//       return;
//     }

//     // Update the Comment's name
//     if (req.body.Comment_name) {
//       CommentToUpdate.Comment_name = req.body.Comment_name;
//       await CommentToUpdate.save();
//     }

//     // Update associated products if product IDs are provided in the request body
//     if (req.body.products && Array.isArray(req.body.products)) {
//       // Get the IDs of products associated with the Comment before the update
//       const previousProductIds = CommentToUpdate.Products.map((product) => product.id);
//       await CommentToUpdate.setProducts(req.body.products);

//       // Remove products from the database that are no longer associated with the Comment
//       const productsToRemoveIds = previousProductIds.filter(
//         (productId) => !req.body.products.includes(productId)
//       );
//       await ProductComment.destroy({
//         where: {
//           Comment_id: CommentToUpdate.id,
//           product_id: productsToRemoveIds,
//         },
//       });
//     }

//     // Respond with the updated Comment data, including associated products
//     res.status(200).json(CommentToUpdate);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// });

// // DEL/Delete one Comment
// router.delete('/:id', async (req, res) => {
//   try {
//     const productData = await Comment.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!productData) {
//       res.status(404).json({ message: 'No Comment with this id' });
//       return;
//     }
//     res.status(200).json({ message: 'Category and associated products have been deleted' });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
